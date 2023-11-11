// Did it this way since it looks nicer.
const Email = "AdenSugal99@noroff.no";
const Password = "Test12345678";

describe("Login and Access Profile", () => {
  it("will log in Access Profile", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal button[type=button]").contains("Login").click();
    cy.wait(2000);
    cy.get("#loginEmail").type(Email);
    cy.get("#loginPassword").type(Password);
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(500);
  });
});
