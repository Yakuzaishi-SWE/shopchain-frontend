/* eslint-disable sonarjs/no-duplicate-string */
import { AppContext } from "providers";
import { useCallback, useContext } from "react";
import useAddress from "./useAddress";
import { Contract } from "web3-eth-contract";

const useSmartContract = (): [
    Contract | null,
    {
        create: (data: { seller: string, amount: string, id: string }) => Promise<void>,
        unlock: (id: string, code: number) => Promise<void>,
        refund: (id: string) => Promise<void>,
        getContractBalance: () => Promise<number>,
        getOrderCount: () => Promise<number>,
    }
] => {
    const contract = useContext(AppContext).contract;
    const from = useAddress();

    const create = useCallback(async ({ seller, amount, id }: { seller: string, amount: string, id: string }) => {
        if (!contract)
            throw new Error("Contract Not Initiated");
        try {
            await contract.methods
                .newOrder(seller, amount, id)
                .send({ from, value: amount });
        } catch (err) {
            if ((err as any).code && (err as any).code === -32602) {
                await contract.methods
                    .newOrder(seller, amount, id)
                    .send({ from, value: amount, type: "0x1" });
            } else {
                throw err;
            }
        }
    }, [contract]);


    const unlock = useCallback(async (id: string, code: number) => {
        if (!contract)
            throw new Error("Contract Not Initiated");
        try {
            await contract.methods
                .confirmReceived(id, code)
                .send({ from });
        } catch (err) {
            if ((err as any).code && (err as any).code === -32602) {
                await contract.methods
                    .confirmReceived(id, code)
                    .send({ from, type: "0x1" });
            } else {
                throw err;
            }
        }
    }, [contract]);

    const refund = useCallback(async (id: string) => {
        if (!contract)
            throw new Error("Contract Not Initiated");
        try {
            await contract.methods
                .refundFromOwner(id)
                .send({ from });
        } catch (err) {
            if ((err as any).code && (err as any).code === -32602) {
                await contract.methods
                    .refundFromOwner(id)
                    .send({ from, type: "0x1" });
            } else {
                throw err;
            }
        }
    }, [contract]);

    const getContractBalance = useCallback(async (): Promise<number> => {
        if (!contract)
            throw new Error("Contract Not Initiated");
        return await contract.methods
            .contractBalance()
            .call();
    }, [contract]);

    const getOrderCount = useCallback(async (): Promise<number> => {
        if (!contract)
            throw new Error("Contract Not Initiated");
        return await contract.methods
            .getOrderCount()
            .call();
    }, [contract]);

    return [contract, { create, unlock, refund, getContractBalance, getOrderCount }];
};

export default useSmartContract;