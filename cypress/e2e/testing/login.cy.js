describe("Login and access test", () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:5500");
      cy.clearLocalStorage();
    });
  
    it("allows successful login and access to profile", () => {
      const validEmail = "victoria@stud.noroff.no";
      const validPassword = "password";
  
      cy.get("button[data-auth='login']").click();
      cy.get("input[type='email']").type(validEmail);
      cy.get("input[type='password']").type(validPassword);
      cy.get(".btn-success").click();
  
      cy.url().should("include", "/profile");
    });
  });

  describe("Invalid Login attempt test", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.clearLocalStorage();
    });
  
    it("displays an error message on invalid credentials", () => {
      const invalidEmail = "invalid-email@example.com";
      const invalidPassword = "invalid-password";
  
      cy.get("button[data-auth='login']").click();
      cy.get("input[type='email']").type(invalidEmail);
      cy.get("input[type='password']").type(invalidPassword);
      cy.get(".btn-success").click();
  
      cy.get(".error-message").should("be.visible");
    });
  });

  describe("Logout test", () => {
    beforeEach(() => {
      // Log in before each test
      const validEmail = "your-valid-email@example.com";
      const validPassword = "your-valid-password";
  
      cy.get("button[data-auth='login']").click();
      cy.get("input[type='email']").type(validEmail);
      cy.get("input[type='password']").type(validPassword);
      cy.get(".btn-success").click();
    });
  
    it("allows user to log out with the logout button", () => {
      cy.get("button[data-auth='logout']").click();
      cy.url().should("not.include", "/profile");
    });
  });