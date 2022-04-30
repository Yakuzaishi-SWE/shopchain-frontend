import { makeAutoObservable } from "mobx";
import { computedFn } from "mobx-utils";
import ComputedTask from "./ComputedTask";
import Task from "./Task";


interface DataRequestFromID {
    id: string,
}

interface DataRequestFromPage {
    filter: Record<string, string | number | boolean | null | undefined> | undefined,
    cursor?: string | null,
}

/* export function serializeDataRequestFromPage(dataRequest: DataRequestFromPage): string {
    return JSON.stringify({
        filter: dataRequest.filter ? Object.keys(dataRequest.filter).sort().reduce((acc, key, arr) => {
            acc[key] = dataRequest.filter ? dataRequest.filter[key]: undefined;
            return acc;
        }, {}) : {},
        cursor: dataRequest.cursor || null,
    });
} */

/**
 * Thought for "cache first" or "NOT stale while revalidate" strategy
 * It should be always returned data from cache, and if it's expired or not present it fetches data from network
 * With the power of MobX observables it automatically updates the data, and it propagates the update.
 */
export default class TaskCache<R = void, A extends any[] = [], RESULT extends R = R> {
    // expireTime in milliseconds
    static readonly DEFAULT_EXPIRE_TIME: number = 60 * 1000; // 60 sec
    private readonly expireTime: number;
    private hits: Map<string, ComputedTask<R, A, RESULT>> = new Map();

    // get(id: string) {
    //     return this.hits.get(id);
    // }
    isExpired(id: string): boolean {
        const task = this.hits.get(id);
        if (!task) return true;
        return task.age > this.expireTime;
    }

    revalidate(...deps: A): ComputedTask<R, A, RESULT> {
        const id = this.idfn(...deps);
        const t = this.hits.get(id);
        if (t) {
            // if it has the task but it's not in busy state and it's expired, revalidate
            // if it has the task but it's not in busy state and it's failed, revalidate
            if (!t.isTaskBusy && (this.isExpired(id) || (t.isFailed && t.age > 5000))) {
                // then reset task and re-exec()
                t.reset();
                t.exec();
            } else {
                // if it has the task but it's in busy state, it means that recently it has been called -> do nothing -> hit!
                // console.log(id, "hit!");
            }
            return t;
        } else {
            return this.set(id, ComputedTask.create<R, A, RESULT>(this.taskfn, this.resultfn, ...deps));
        }
    }

    invalidate(id: string): void {
        this.hits.delete(id);
    }

    set(id: string, task: ComputedTask<R, A, RESULT>): ComputedTask<R, A, RESULT> {
        if (!task.isBusy) task.exec();
        this.hits.set(id, task);
        return task;
    }

    private idfn: (...deps: A) => string;
    private taskfn: (...deps: A) => Promise<R>;
    private resultfn: (data: R | null) => RESULT;

    /**
     * when expireTime is set as 0, it means that cache is disabled and it only checks that one action per data request is runned
     * Example:  if I create a session for [guest_id] and call revalidate multiple time, only the first will exec the task and until it leaves the busy state none of the other calls to create the session for that guest_id will be considered 
     * @param expireTime in milliseconds
     */
    constructor(expireTime: number = TaskCache.DEFAULT_EXPIRE_TIME, idfn: (...deps: A) => string, taskfn: (...deps: A) => Promise<R>, resultfn: (data: R | null) => RESULT) {
        this.expireTime = expireTime;
        this.idfn = computedFn(idfn);
        this.taskfn = taskfn;
        this.resultfn = computedFn(resultfn);
        makeAutoObservable(this);
    }
}