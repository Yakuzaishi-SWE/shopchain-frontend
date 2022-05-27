import privateKeyToAddress from "ethereum-private-key-to-address";
import Web3 from "web3";

/// <reference types="cypress" />

describe("MoneyBox Details Page Tests", () => {
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



    it("TS1F2.2.1: Verificare che l’utente possa visualizzare lo stato di completamento della MoneyBox Correttamente.", () => {
        cy.visit("http://localhost:8085/#/");
        cy.visit("http://localhost:8085/#/out/moneybox/3499e238-4200-4803-aebe-7bbd5d4339a0/");
        cy.get('.moneybox-percentage').should('be.visible');

    });

    it("TS1F2.2.2: Verificare che l’utente possa copiare l'invito di partecipazione della MoneyBox Correttamente.", () => {
        cy.get('#copy-invite-link').should('be.visible');
        cy.get('#copy-invite-link').should('have.text', 'Copy invite link');
        cy.get('#copy-invite-link').should('not.have.attr', 'disabled');
    });

    
    it("TSF2.2.3 Verificare che l’utente possa visualizzare una traduzione visiva della MoneyBox correttamente.", () => {
        cy.get('.bigPiggy').should('be.visible');
    });

    // TO DO
    // it("TSF2.2.4 ", () => {});

    it("TSF2.2.5 Verificare che l’utente possa visualizzare l’elenco delle transazione dei partecipanti alla MoneyBox correttamente.", () => {
        cy.get('#table-payments').should('be.visible');
    });
});