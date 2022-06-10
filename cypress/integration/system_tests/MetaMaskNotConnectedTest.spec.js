/// <reference types="cypress" />

describe("MetaMask not connected Tests", () => {
    it("TS1F11.2: Verificare che l’utente possa visualizzare correttamente un avviso della mancata connessione a Metamask.", () => {
        cy.visit("localhost:8085/#/");
        cy.get('.btn-connect').should('be.visible');
        cy.get('.btn-connect').should('contain', 'Connect MetaMask');
    });
});