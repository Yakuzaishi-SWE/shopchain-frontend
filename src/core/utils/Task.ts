
import { action, computed, makeAutoObservable, makeObservable, observable } from "mobx";
import moment from "moment";

// generate random unique identifier
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export default class Task<R = void, A extends any[] = [], F extends (...a: A) => Promise<R> = (...a: A) => Promise<R>> {
    public id: string;

    protected readonly taskfn: F;
    protected readonly args: A;

    /** start time in milliseconds */
    public starttime = 0;
    /** end time of task in milliseconds */
    public endtime = 0;

    public isTaskBusy = false;
    public isTaskLoaded = false;
    public isTaskFailed = false;

    public error: unknown = null;
    public taskResponse: R | null = null;

    get result() {
        return this.taskResponse;
    }

    get isBusy(): boolean {
        return this.isTaskBusy;
    }

    get isLoaded(): boolean {
        return this.isTaskLoaded;
    }

    get isFailed(): boolean {
        return this.isTaskFailed;
    }

    /** Age of the task in milliseconds (from the starttime)*/
    get age(): number {
        return moment().valueOf() - this.starttime;
    }

    protected setLoaded(data: R, cb?: (result: R) => void) {
        this.isTaskLoaded = true;
        this.taskResponse = data;
    }

    protected setFailed(err: any, cb?: (err: any) => void) {
        console.error(err);
        this.isTaskFailed = true;
        this.error = err;
    }

    protected start() {
        this.isTaskBusy = true;
        this.starttime = moment().valueOf();
    }

    protected stop() {
        this.isTaskBusy = false;
        this.endtime = moment().valueOf();
    }

    constructor(taskfn: F, ...args : A) {
        this.id = generateUUID();
        this.taskfn = taskfn;
        this.args = args;
        makeObservable<this, "taskfn" | "args" | "start" | "stop" | "setLoaded" | "setFailed">(this, {
            id: observable,
            args: observable,
            taskfn: observable,
            starttime: observable,
            endtime: observable,
            isBusy: computed,
            isLoaded: computed,
            isFailed: computed,
            isTaskBusy: observable,
            isTaskLoaded: observable,
            isTaskFailed: observable,
            error: observable,
            taskResponse: observable,
            result: computed,
            age: computed,
            setLoaded: action,
            setFailed: action,
            start: action,
            stop: action,
            exec: action,
            kill: action,
            reset: action,
        }, { autoBind: true });
    }

    exec(): this;
    exec(onsuccess: (data: R) => void, onerror: (err: any) => void): this;
    exec(onsuccess?: (data: R) => void, onerror?: (err: any) => void): this {
        // if is busy
        if (this.isTaskBusy) return this;

        this.start();
        this.taskfn(...this.args)
            .then((data) => this.setLoaded(data, onsuccess))
            .catch(err => this.setFailed(err, onerror))
            .finally(() => this.stop());
        return this;
    }

    kill() {
        return this;
    }

    reset() {
        this.isTaskBusy = false;
        this.isTaskLoaded = false;
        this.isTaskFailed = false;
        this.error = null;
        this.taskResponse = null;
        this.starttime = 0;
        this.endtime = 0;
    }

    public static create<R = void, DEPS extends Task<any>[] = []>(taskfn: (...deps: DEPS) => Promise<R>, ...deps: DEPS): Task<R, DEPS> {
        return new Task(taskfn, ...deps);
    }
}