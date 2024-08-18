Cypress.Commands.add('visitHomePage', () => {
    cy.visit('/');
    cy.wait(500);
});
