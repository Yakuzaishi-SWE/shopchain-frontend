import { makeObservable, observable, override } from "mobx";
import Task from "./Task";

// @ts-expect-error: lancia errore a caso
export default class ComputedTask<R = void, A extends any[] = [], RESULT extends R = R> extends Task<R, A> {
        
    private readonly resultfn: (data: R | null, ...args: A) => RESULT;

    get result(): RESULT {
        return this.resultfn(this.taskResponse, ...this.args);
    }

    constructor(taskfn: (...deps: A) => Promise<R>, resultfn: (data: R | null, ...args: A) => RESULT, ...args: A) {
        super(taskfn, ...args);
        this.resultfn = resultfn;
        makeObservable<this, "resultfn">(this, {
            result: override,
            resultfn: observable,
        });
    }

    public static create<R = void, A extends any[] = [], RESULT extends R = R>(taskfn: (...deps: A) => Promise<R>, resultfn: (data: R | null, ...args: A) => RESULT, ...deps: A): ComputedTask<R, A, RESULT> {
        return new ComputedTask(taskfn, resultfn, ...deps);
    }
}