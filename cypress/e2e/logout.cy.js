const email = "AdenSugal99@noroff.no";
const password = "Test12345678";

describe("Logout", () => {
  it("should log in user", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal button[type=button]").contains("Login").click();
    cy.wait(2000);
    cy.get("input[type='email']:visible").type(email);
    cy.get("input[type='password']:visible").type(password);
    cy.get("button[type=submit]").contains("Login").click();
    // Wait for the login to complete and check for the authentication token
    cy.wait(3500);
    cy.window().its("localStorage").invoke("getItem", "token").should("exist");
  });

  it("should logout user", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(1000);
    cy.get("input[type='email']:visible", { delay: 500 });
    cy.get("input[type='password']:visible", { delay: 500 });
    cy.get("button[type=submit]").contains("Login").click();
    // After logout, check if the token is cleared from localStorage
    cy.window()
      .its("localStorage")
      .invoke("getItem", "token")
      .should("not.exist");
    cy.wait(500);
  });
});
