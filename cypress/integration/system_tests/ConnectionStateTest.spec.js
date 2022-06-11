import privateKeyToAddress from "ethereum-private-key-to-address";
import Web3 from "web3";

/// <reference types="cypress" />

describe("Connection State Tests", () => {
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

    it("TS1F14: Verificare che l'utente possa visualizzare correttamente lo stato di connessione a MetaMask.", () => {
        cy.visit("localhost:8085/#/");
        cy.get('.provider-error').should('be.visible');

    });

    it("TS1F14.1: Verificare che l'utente possa visualizzare un suggerimento se connesso correttamente.", () => {
        cy.get('.provider-error').trigger('mouseover');
        cy.get('.error-overlay > span').should('contain', 'OK');
        cy.get('.error-overlay > p').should('contain', 'Everything is nominal');
    });


});