const email = "AdenSugal99@noroff.no";
const password = "Test12345678";

describe("Login and Access Profile", () => {
  it("will log in and access the profile", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal button[type=button]").contains("Login").click();
    cy.wait(2000);
    cy.get("#loginEmail").type(email);
    cy.get("#loginPassword").type(password);
    cy.get("button[type=submit]").contains("Login").click();

    // Wait for the login to complete and check for the authentication token
    cy.wait(2000);
    cy.window().its("localStorage").invoke("getItem", "token").should("exist");
  });
});
