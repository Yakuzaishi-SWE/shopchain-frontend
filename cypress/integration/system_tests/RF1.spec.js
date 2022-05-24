
import privateKeyToAddress from "ethereum-private-key-to-address";
import Web3 from "web3";

/// <reference types="cypress" />

// import PrivateKeyProvider from "truffle-privatekey-provider";
import ProviderEngine from "web3-provider-engine";
import FiltersSubprovider from "web3-provider-engine/subproviders/filters";
import WalletSubprovider from "web3-provider-engine/subproviders/wallet";
import RpcSubprovider from "web3-provider-engine/subproviders/rpc";
import Wallet from "ethereumjs-wallet";
import NonceSubprovider from "web3-provider-engine/subproviders/nonce-tracker";

class PrivateKeyProvider {
    constructor(privateKey, providerUrl) {
        if (!privateKey) {
            throw new Error(`Private Key missing, non-empty string expected, got "${privateKey}"`);
        }

        if (!providerUrl) {
            throw new Error(`Provider URL missing, non-empty string expected, got "${providerUrl}"`);
        }

        if (privateKey.startsWith("0x")) {
            privateKey = privateKey.substr(2, privateKey.length);
        }

        this.wallet = new Wallet(Buffer.from(privateKey, "hex"));
        this.address = "0x" + this.wallet.getAddress().toString("hex");

        this.engine = new ProviderEngine();

        this.engine.addProvider(new FiltersSubprovider());
        this.engine.addProvider(new NonceSubprovider());
        this.engine.addProvider(new WalletSubprovider(this.wallet, {}));
        this.engine.addProvider(new RpcSubprovider({ rpcUrl: providerUrl }));

        this.engine.start();
    }
    sendAsync() {
        this.engine.sendAsync.apply(this.engine, arguments);
    }
    send() {
        return this.engine.send.apply(this.engine, arguments);
    }
}

import Accounts, { } from "web3-eth-accounts";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("RF1", () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.on("window:before:load", (win) => {
            // const provider = new PrivateKeyProvider(
            //     "d5d4d2323ead64f264bdf8216f5112a22a72294291da220f78b34d49329d0c96",
            //     "https://rpc.testnet.fantom.network/"
            // );
            const privateKey = "d5d4d2323ead64f264bdf8216f5112a22a72294291da220f78b34d49329d0c96";
            const provider = new Web3.providers.HttpProvider("https://rpc.testnet.fantom.network/", {});
            const address = privateKeyToAddress(privateKey);
            const w3 = new Web3(provider);
            const account = w3.eth.accounts.privateKeyToAccount(privateKey);
            w3.eth.defaultChain = "0xfa2";
            w3.eth.defaultAccount = account.address;

            w3.addListener = () => { return; };
            w3.request = async ({ method }) => {
                if (method === "eth_accounts") return [address];
                if (method === "eth_requestAccounts") return [address];
                if (method === "eth_chainId") return "0xfa2";
            };
            win.ethereum = w3;
        });
        cy.visit("http://localhost:8085/");
        cy.contains("Checkout Page").click();
    });

    it("tests things", () => {
        cy.get(".ftm-input").type("0.0001");
        cy.get(".btn-block > input").click();
        cy.get(".btn-payalone").click();
    });
});
