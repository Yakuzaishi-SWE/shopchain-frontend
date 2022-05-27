import privateKeyToAddress from "ethereum-private-key-to-address";
import Web3 from "web3";

/// <reference types="cypress" />

describe("Order Details Tests", () => {
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


    it("TSF1F3 Verificare che l’utente possa visualizzare il totale dell’ordine correttamente.", () => {
        cy.visit('http://localhost:8085/#/out/order/89c33051-f88b-490b-bbb4-f02e0f7ca6a0/');
        cy.get('.transaction-details > ul > :nth-child(4)').should('be.visible');
    });

    it("TS1F7 Verificare che il proprietario dell’ordine possa sbloccare correttamente i fondi dallo Smart Contract dopo avvenuta ricezione", () => {
        cy.get('#unlock').should('be.visible');
        cy.get('#unlock').should('be.enabled');
        cy.get('#unlock').click();
        
        cy.get('.unlock-code').should('be.visible');
        cy.get('input').type("8943440", { delay: 200 });
        cy.get('.popup-inner > :nth-child(3)').should('be.visible');
        cy.get('.popup-inner > :nth-child(3)').should('be.enabled');
    });

    it("TS1F7.1 Verificare che il proprietario dell’ordine possa visualizzare correttamente il codice di sblocco.", () => {
        cy.get('.popup-inner').should('be.visible');
    });

    it("TS1F7.2 ", () => {
        
    });


});
