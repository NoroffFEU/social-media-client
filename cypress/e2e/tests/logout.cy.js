describe("Logout", () => {
    beforeEach(() => {
        // Visit the root URL and clear storage before each test
      cy.visit("/");
      cy.clearLocalStorage();
    });
  
    it("should allow a user to logout with the logout button", () => {
      cy.visit("/");
      cy.wait(300);

      // Open the login modal
      cy.get("#registerModal").contains("Login").click();
      cy.wait(500);

      // Ensure the login form is visible
      cy.get("#loginForm").should("be.visible");

      // Log in 
      cy.get("#loginEmail").type("js2ca2023@stud.noroff.no");
      cy.get("#loginPassword").type("js2ca666");
      cy.get("button[type=submit]").first().click();
      cy.wait(500);

      // Click the log out button
      cy.get("button[data-auth='logout']").click();

      // Expect profile and token to be null in local storage
      cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
      cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    });
  });