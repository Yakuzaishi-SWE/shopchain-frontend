import { MetaMaskInpageProvider } from "@metamask/providers";
import ProviderStore from "../../store/ProviderStore";
import ProviderState from "../ProviderState";

const store : ProviderStore = {
    provider: null ,
    w3: {
        mm: null,
        om: null,
    },
    address: {
        address: null,
    },
    chain: {
        isFantomTestnet: false,
    },
} as unknown as  ProviderStore;

describe("providerstate", () => {
    it("provider not set", () => {
        const p = new ProviderState(store);
        expect(p.isOK).toBeFalsy();
        expect(p.name).toEqual("METAMASK_NOT_INSTALLED");
        expect(p.description).toEqual("Please install MetaMask");
    });
})