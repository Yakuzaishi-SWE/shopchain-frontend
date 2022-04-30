import { when } from "mobx";
import Task from "../Task";

function createTaskFn<R = any, DEPS extends Task<any>[] = []>() {
    let promiseResolve = (data?: any) => { };
    let promiseRejects = (reason?: any) => { };
    const promise = new Promise<R>((resolve, rejects) => {
        promiseResolve = resolve;
        promiseRejects = rejects;
    });
    const fn = jest.fn((...deps: DEPS) => promise);
    return {
        resolve: promiseResolve,
        rejects: promiseRejects,
        fn,
    }
}

describe("Task", () => {

    describe("Simple Task", () => {

        test("create Task", () => {
            const promise = createTaskFn();
            const task = Task.create(promise.fn);
            expect(task).toBeDefined();
            expect(task.id).toBeDefined();
            expect(task.isTaskBusy).toBe(false);
            expect(task.isTaskLoaded).toBe(false);
            expect(task.isTaskFailed).toBe(false);
            promise.resolve();
        });

        test("exec Task", async () => {
            const promise = createTaskFn();
            const task = Task.create(promise.fn);
            expect(task.isTaskBusy).toBe(false);
            expect(task.isTaskLoaded).toBe(false);
            expect(task.isTaskFailed).toBe(false);
            task.exec();
            expect(promise.fn).toHaveBeenCalledTimes(1);
            await when(() => task.isTaskBusy === true);
            expect(task.isTaskBusy).toBe(true);
            expect(task.isTaskLoaded).toBe(false);
            expect(task.isTaskFailed).toBe(false);
            const result = {
                data: "data",
            };
            promise.resolve(result);
            await when(() => task.isTaskBusy === false);
            expect(task.isTaskBusy).toBe(false);
            expect(task.isTaskLoaded).toBe(true);
            expect(task.isTaskFailed).toBe(false);
            expect(task.result).toStrictEqual(result);
        });

        test("fail exec Task", async () => {
            const promise = createTaskFn();
            const task = Task.create(promise.fn);
            expect(task.isTaskBusy).toBe(false);
            expect(task.isTaskLoaded).toBe(false);
            expect(task.isTaskFailed).toBe(false);
            task.exec();
            expect(promise.fn).toHaveBeenCalledTimes(1);
            await when(() => task.isTaskBusy === true);
            expect(task.isTaskBusy).toBe(true);
            expect(task.isTaskLoaded).toBe(false);
            expect(task.isTaskFailed).toBe(false);
            const err = new Error("george");
            promise.rejects(err);
            await when(() => task.isTaskBusy === false);
            expect(task.isTaskBusy).toBe(false);
            expect(task.isTaskLoaded).toBe(false);
            expect(task.isTaskFailed).toBe(true);
            expect(task.error).toBe(err);
        });
    });

    describe("Task with dependencies", () => {

        const fns = [
            createTaskFn(),
            createTaskFn(),
            createTaskFn(),
        ];

        const deps: [
            Task<number>,
            Task<string>,
            Task<number>,
        ] = [
                Task.create(fns[0].fn),
                Task.create(fns[0].fn),
                Task.create(fns[0].fn),
            ];

        type DepsType = typeof deps;

        beforeEach(() => {
            fns[0] = createTaskFn();
            fns[1] = createTaskFn();
            fns[2] = createTaskFn();
            deps[0] = Task.create(fns[0].fn);
            deps[1] = Task.create(fns[1].fn);
            deps[2] = Task.create(fns[2].fn);
        })

        test("create Task", async () => {
            const promise = createTaskFn<DepsType>();
            const task = Task.create<any, DepsType>(promise.fn, ...deps);
            expect(task).toBeDefined();
            expect(task.id).toBeDefined();
            expect(task.isTaskBusy).toBe(false);
            expect(task.isTaskLoaded).toBe(false);
            expect(task.isTaskFailed).toBe(false);
            expect(task.areDependenciesBusy).toBe(false);
            expect(task.areDependenciesLoaded).toBe(false);
            expect(task.areDependenciesFailed).toBe(false);

            deps[0].exec();
            await when(() => deps[0].isBusy === true);
            expect(task.areDependenciesBusy).toBe(true);
            expect(task.isBusy).toBe(true);
            fns[0].resolve();
            await when(() => deps[0].isBusy === false);
            expect(task.areDependenciesBusy).toBe(false);
            expect(task.isBusy).toBe(false);
            deps[1].exec();
            fns[1].resolve();
            await when(() => deps[1].isBusy === false);
            deps[2].exec();
            fns[2].resolve();
            await when(() => deps[2].isBusy === false);
            expect(task.areDependenciesBusy).toBe(false);
            expect(task.isBusy).toBe(false);
            expect(task.areDependenciesLoaded).toBe(true);
            expect(task.isLoaded).toBe(false);
            task.exec();
            
            // promise.resolve();
        });
    });

    test("reset method", () => {
        const promise = createTaskFn();
        const task = Task.create(promise.fn);
        expect(task.kill()).toBe(task);
    })

    test("kill method", () => {
        const promise = createTaskFn();
        const task = Task.create(promise.fn);
        expect(task.kill()).toBe(task);
    });
})