const vaildEmail = "idangu50260@stud.noroff.no";
const validPassword = "Lollipop1";

describe("Logout", () => {
  it("Perform a login and logout action, check the state at every turn", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("body").should("not.have.class", "logged-in");
    cy.get("#registerModal").contains("Close").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(vaildEmail);
    cy.get("#loginPassword").type(validPassword);
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(3000);
    cy.on("window:alert", (str) => {
      expect(str).to.not.equal(
        "Either your username was not found or your password is incorrect"
      );
    });
    cy.wait(500);
    cy.get("body").should("have.class", "logged-in");
    cy.get("button[data-auth=logout]").contains("Logout").click();
    cy.wait(500);
    cy.get("body").should("not.have.class", "logged-in");
  });
});
