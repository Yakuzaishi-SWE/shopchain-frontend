import privateKeyToAddress from "ethereum-private-key-to-address";
import Web3 from "web3";

/// <reference types="cypress" />

describe("Your Transaction Page Tests", () => {
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
    });

    it("TS2F8.2: Verificare che l’utente possa visualizzare le transazioni.", () => {
        cy.visit("http://localhost:8085/Transaction/out#/transaction/out/");
        cy.get('.transaction-list').should('be.visible');
    });

    it("TS2F8.2.1: Verificare che l’utente possa visualizzare le transazioni in uscita non pagate.", () => {
        cy.get(':nth-child(2) > #type-dropdown').select("Created");

        cy.get(':nth-child(2) > #type-dropdown').should('have.value', 'Created');
    });

    it("TS2F8.2.2: Verificare che il proprietario dell’ordine possa visualizzare le transazioni in uscita pagate ma non sbloccate.", () => {
        cy.get(':nth-child(2) > #type-dropdown').select("Paid");

        cy.get(':nth-child(2) > #type-dropdown').should('have.value', 'Paid');
    });

    it("TS2F8.2.3: Verificare che il proprietario dell’ordine possa visualizzare le transazioni in uscita pagate e sbloccate.", () => {
        cy.get(':nth-child(2) > #type-dropdown').select("Unlocked");

        cy.get(':nth-child(2) > #type-dropdown').should('have.value', 'Unlocked');
    });

    it("TS2F8.2.4: Verificare che l’utente possa visualizzare le transazioni in uscita cancellate.", () => {
        cy.get(':nth-child(2) > #type-dropdown').select("Refunded");

        cy.get(':nth-child(2) > #type-dropdown').should('have.value', 'Refunded');
    });

});