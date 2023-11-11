const Email = "AdenSugal99@noroff.no";
const Password = "Test12345678";

describe("Logout", () => {
  it("should log in user", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal button[type=button]").contains("Login").click();
    cy.wait(2000);
    cy.get("input[type='email']:visible").type(Email);
    cy.get("input[type='password']:visible").type(Password);
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(3000);
  });

  it("should logout user", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(1000);
    cy.get("input[type='email']:visible", { delay: 500 });
    cy.get("input[type='password']:visible", { delay: 500 });
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(500);
  });
});
