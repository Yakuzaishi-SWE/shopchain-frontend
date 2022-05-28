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
            //     "d5d4d2323ead64f264bdf8216f5112a22a72294291da220f78b34d49329d0c96",
            //     "https://rpc.testnet.fantom.network/"
            // );
            const privateKey = "d5d4d2323ead64f264bdf8216f5112a22a72294291da220f78b34d49329d0c96";
            const provider = new Web3.providers.HttpProvider("https://rpc.testnet.fantom.network/", {});
            const address = privateKeyToAddress(privateKey);
            const w3 = new Web3(provider);
            const account = w3.eth.accounts.privateKeyToAccount(privateKey);
            w3.eth.defaultChain = "0xfa1";
            w3.eth.defaultAccount = account.address;

            w3.addListener = () => { return; };
            w3.request = async ({ method }) => {
                if (method === "eth_accounts") return [address];
                if (method === "eth_requestAccounts") return [address];
                if (method === "eth_chainId") return "0xfa1";
            };
            win.ethereum = w3;
        });
    });

    it("TS1F14.3: Verificare che l'utente possa visualizzare un errore nel caso in cui la blockchain selezionata non sia corretta.", () => {
        cy.visit('http://localhost:8085/#/');
        cy.get('.btn-connect').should('be.visible');
        //cy.get('.provider-error').trigger('mouseover')
        cy.get('.error-overlay > span').should('contain', 'WRONG_CHAIN');
        cy.get('.error-overlay > p').should('contain', 'Connect to Fantom Test Net (0xfa2)');
    });


});