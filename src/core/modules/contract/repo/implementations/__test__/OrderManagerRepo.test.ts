import OrderManagerRepo from '../OrderManagerRepo';
import OrderManagerContract from '../../../../../provider/contracts/OrderManagerContract';

const call = jest.fn(async () => 1);

const contract: OrderManagerContract = {
    instance: {
        methods: {
            getBalance: jest.fn(() => {
                return { call }
            }),
            getOrderCount: jest.fn(() => {
                return { call }
            })
        }
    },
} as any;

const undefinedContract: OrderManagerContract = {
    instance: null,
} as any;

describe('OrderManagerRepo', () => {

    it("should create an instance of OrderManagerRepo", () => {
        const orderManagerRepo = new OrderManagerRepo(contract);
        expect(orderManagerRepo).toBeTruthy();
        expect(orderManagerRepo).not.toBeFalsy();
    })

    describe("should get contract balance", () => {
        it("undefined instance", async () => {
            const undefOrderManagerRepo = new OrderManagerRepo(undefinedContract);
            expect(await undefOrderManagerRepo.getContractBalance()).toBeUndefined();
        });
        
        it("defined instance", async () => {
            const orderManagerRepo = new OrderManagerRepo(contract);
            expect(await orderManagerRepo.getContractBalance()).toBe(1);
            expect(call).toHaveBeenCalled();
            expect(contract.instance?.methods.getBalance).toHaveBeenCalled();
        });
    });

    describe("should get the order count", () =>{

        it("undefined instance",  async () => {
            const undefOrderManagerRepo = new OrderManagerRepo(undefinedContract);
            expect(await undefOrderManagerRepo.getOrderCount()).toBeUndefined();
        })

        it("defined instance", async () => {
            const orderManagerRepo = new OrderManagerRepo(contract);
            expect(await orderManagerRepo.getOrderCount()).toBe(1);
            expect(call).toHaveBeenCalled();
            expect(contract.instance?.methods.getOrderCount).toHaveBeenCalled();
        });
    });

});