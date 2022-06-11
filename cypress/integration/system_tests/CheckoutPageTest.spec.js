import privateKeyToAddress from "ethereum-private-key-to-address";
import Web3 from "web3";

/// <reference types="cypress" />

describe("Checkout Page Tests", () => {
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

    it("TS1F1: Verificare che la richiesta di checkout da un ECommerce avvenga correttamente.", () => {
        cy.visit("http://localhost:8085/#/checkout");
        cy.get('.clickable-input').type("0.5");
        cy.get('.btn-block > input').click();
        cy.url().should('contain', 'http://localhost:8085/#/checkout/');
        cy.url().should('contain', '/?amount=500000000000000000');
    });

        it("TS1F2: Verificare che l’utente visualizzi correttamente le diverse tipologie di pagamento.", () => {
            cy.get('.btn-payalone').should('be.visible');
            cy.get('.btn-payalone').should('have.text', 'Pay Alone');
            cy.get('.btn-moneybox').should('be.visible');
            cy.get('.btn-moneybox').should('have.text', 'Create Money Box');
        });

        it("TS1F2.1: Verificare che l’utente possa scegliere la tipologia di pagamento unico correttamente.", () => {
            cy.get('.btn-payalone').should('be.visible');
            cy.get('.btn-payalone').should('have.text', 'Pay Alone');
            cy.get('.btn-payalone').should('not.have.attr', 'disabled');
            cy.get('.btn-payalone').click();
        });
        
        it("TS1F2.2: Verificare che l’utente possa scegliere la tipologia di pagamento Money Box correttamente.", () => {
            cy.get('.btn-moneybox').should('be.visible');
            cy.get('.btn-moneybox').should('have.text', 'Create Money Box');
            cy.get('.btn-moneybox').should('not.have.attr', 'disabled');
        });

        // it("Transaction Success", () => {
        //     cy.visit("http://localhost:8085/#/checkout/success/order/e80601f3-27a5-4b9e-8ea3-f409667f9e80");
        // });




});