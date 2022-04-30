import { makeAutoObservable, makeObservable, observable, override } from "mobx";
import { computedFn } from "mobx-utils";
import Task from "./Task";



// @ts-expect-error
export default class ComputedTask<R = void, args extends any[] = [], RESULT extends R = R> extends Task<R, args> {
        
    private readonly resultfn: (data: R | null) => RESULT;

    get result(): RESULT {
        return this.resultfn(this.taskResponse);
    }

    constructor(taskfn: (...deps: args) => Promise<R>, resultfn: (data: R | null) => RESULT, ...deps: args) {
        super(taskfn, ...deps);
        this.resultfn = resultfn;
        makeObservable<this, "resultfn">(this, {
            result: override,
            resultfn: observable,
        });
    }

    public static create<R = void, DEPS extends Task<any>[] = [], RESULT extends R = R>(taskfn: (...deps: DEPS) => Promise<R>, resultfn: (data: R | null) => RESULT, ...deps: DEPS): ComputedTask<R, DEPS, RESULT> {
        return new ComputedTask(taskfn, resultfn, ...deps);
    }
}