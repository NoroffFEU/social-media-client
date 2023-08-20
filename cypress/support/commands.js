Cypress.Commands.add('login', (email, password) => {
    cy.visit("http://localhost:8080");
    cy.get("#registerModal").should("be.visible").find("[data-auth='login']").click();
    cy.get("#registerModal").invoke("hide");
    cy.wait(1000);
    cy.get("#loginEmail").type(email);
    cy.get("#loginPassword").type(password);
    cy.get("#loginForm").submit();
});

