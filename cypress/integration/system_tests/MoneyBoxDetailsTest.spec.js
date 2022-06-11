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
            //     "74ede2dfa2d570b79381f07385861831241d0a8951e17e796c73e7b0801779fd",
            //     "https://rpc.testnet.fantom.network/"
            // );
            const privateKey = "74ede2dfa2d570b79381f07385861831241d0a8951e17e796c73e7b0801779fd";
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
        cy.visit("http://localhost:8085/#/out/moneybox/ba6c1d4b-7082-4da8-963f-6a14838bdf1e/");
        cy.get('.moneybox-percentage').should('be.visible');

    });

    it("TS1F2.2.2: Verificare che l’utente possa copiare l'invito di partecipazione della MoneyBox Correttamente.", () => {
        cy.get('#copy-invite-link').should('be.visible');
        cy.get('#copy-invite-link').should('have.text', 'Copy invite link');
        cy.get('#copy-invite-link').should('not.have.attr', 'disabled');
    });

    it("TS2F2.2.5: Verificare che l’utente possa visualizzare l’elenco delle transazione dei partecipanti alla MoneyBox correttamente.", () => {
        cy.get('#table-payments').should('be.visible');
    });

    it("TS1F16.1: Verificare che l'utente possa visualizzare i dettagli dell'ordine pagato", () => {
        cy.get('.transaction-details').should('be.visible');
    });

    it("TS1F16.1.1: Verificare che l'utente possa visualizzare l'id dell'ordine pagato", () => {
        cy.get('.details > ul > :nth-child(1)').should('be.visible');
        cy.get('.details > ul > :nth-child(1)').should('contain', 'ba6c1d4b-7082-4da8-963f-6a14838bdf1e');
    });

    it("TS1F16.1.2: Verificare che l'utente possa visualizzare l'indirizzo del venditore dell'ordine pagato", () => {
        cy.get('.details > ul > :nth-child(3)').should('be.visible');
        cy.get('.details > ul > :nth-child(3)').should('contain', '0x7B44Fba1DB530C59DB6bbBF1FF886d4e49C07aE7');
    });

    it("TS1F16.1.3: Verificare che l'utente possa visualizzare l'ammontare dell'ordine pagato", () => {
        cy.get('.details > ul > :nth-child(4)').should('be.visible');
        cy.get('.details > ul > :nth-child(4)').should('contain', 'USDT');
    });

    it("TS1F16.1.4: Verificare che l'utente possa visualizzare lo stato dell'ordine pagato", () => {
        cy.get('.details > ul > :nth-child(7)').should('be.visible');
        cy.get('.details > ul > :nth-child(7)').should('contain', 'Created');
    });

    it("TS1F16.1.5: Verificare che l'utente possa visualizzare la data dell'ordine pagato", () => {
        cy.get('.details > ul > :nth-child(8)').should('be.visible');
    });
});