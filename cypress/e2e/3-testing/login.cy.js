describe("Testing login functionality", () => {
    const userEmail = "chrgro27584@stud.noroff.no";
    const userPassword = "password";
  
    beforeEach(() => {
      cy.visit("/");
      cy.get("#registerForm button[type=button]").contains("Login").click();
    });
  
    it("Allows users to login with email and password accepted by the API requirements", () => {
      cy.get("#loginEmail").type(userEmail);
      cy.get("#loginPassword").type(userPassword);
      cy.get("#loginForm button[type=submit]").contains("Login").click();
  
      cy.url().should("include", "profile");
  
      cy.window().then((window) => {
        const token = window.localStorage.getItem('token');
        expect(token).to.exist;
        expect(token).to.not.be.empty;
      });
    });
  });
  
  Cypress.Commands.add("login", (email, password) => {
    cy.visit("/");
    cy.get("#registerForm button[type=button]").contains("Login").click();
    cy.get("#loginEmail").clear().type(email);
    cy.get("#loginPassword").clear().type(password);
    cy.get("#loginForm button[type=submit]").contains("Login").click();
  });