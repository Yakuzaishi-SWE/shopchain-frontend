import privateKeyToAddress from "ethereum-private-key-to-address";
import Web3 from "web3";

/// <reference types="cypress" />

describe("TS1F8", () => {
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
            const privateKey = "5002a4d3aba57698b0789a6cf64ee506142b8aba43be3bdd588dd850a40088f4";
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
        cy.contains("Transactions");
    });

    it("TS2F8.1: Verificare che il venditore possa visualizzare le transazioni in entrata pagate ma non sbloccate", () => {
        cy.get(':nth-child(4) > .home-button').click();
        cy.get('#state-dropdown').select("Paid");

        cy.get('#state-dropdown').should('have.value', 'Paid');
        

    });
});