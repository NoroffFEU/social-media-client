describe("Test for the Logout function", () => {
    const userEmail = "chrgro27584@stud.noroff.no";
    const userPassword = "password";
  
    beforeEach(() => {
      cy.login(userEmail, userPassword);
    });
  
    it("Logs out the user using the logout button", () => {
      cy.window().then((window) => {
        const token = window.localStorage.getItem('token');
        expect(token).to.exist;
        expect(token).to.not.be.empty;
      });
  
      cy.get("header button[type=button]").contains("Logout").click({ force: true });
  
      cy.url().should("not.include", "profile");
  
      cy.get("#registerForm button[type=button]").contains("Login").should("be.visible");
  
      cy.window().then((window) => {
        const token = window.localStorage.getItem('token');
        expect(token).to.be.null;
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
  
  Cypress.Commands.add("logout", () => {
    cy.get("header button[type=button]").contains("Logout").click({ force: true });
  });
  