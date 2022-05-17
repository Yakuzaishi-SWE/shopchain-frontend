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