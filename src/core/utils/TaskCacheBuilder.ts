import { makeAutoObservable } from "mobx";
import ComputedTask from "./ComputedTask";
import TaskCache from "./TaskCache";

export default class TaskCacheBuilder<R = any, A extends any[] = [], RESULT extends R = R> {
    private expireTime: number = TaskCache.DEFAULT_EXPIRE_TIME;
    private idfn: (...args: A) => string = () => "";
    private whenfn: (...args: A) => boolean = () => true;
    private taskfn: (...args: A) => Promise<R> = () => { throw new Error("Method not implemented"); };
    private resultfn: (data: R | null) => RESULT = () => { throw new Error("Method not implemented"); };

    private constructor() { 
        //makeAutoObservable(this, {}, { autoBind: true });
    }

    static build<R = any, A extends any[] = [], RESULT extends R = R>(): TaskCacheBuilder<R, A, RESULT> {
        return new TaskCacheBuilder();
    }

    expireIn(time: number): this {
        this.expireTime = time;
        return this;
    }

    unexpire(): this {
        this.expireTime = Infinity;
        return this;
    }

    id(fn: (...args: A) => string): this {
        this.idfn = fn;
        return this;
    }

    when(fn: (...args: A) => boolean): this {
        this.whenfn = fn;
        return this;
    }

    task(fn: (...args: A) => Promise<R>): this {
        this.taskfn = fn;
        return this;
    }

    result(fn: (data: R | null) => RESULT): this {
        this.resultfn = fn;
        return this;
    }

    get revaildate(): (...args: A) => ComputedTask<R, A, RESULT> {
        const cache = new TaskCache<R, A, RESULT>(this.expireTime, this.idfn, this.taskfn, this.resultfn);
        return (...args) => cache.revalidate(...args)
    }
}