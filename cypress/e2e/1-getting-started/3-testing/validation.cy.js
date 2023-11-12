describe("Login Form", () => {
  const email = "towlietest3@noroff.no";
  const password = "Towlietest123";
  const wrongEmail = "towlietestwrong@noroff.no";
  const wrongPassword = "Towlietestwrong";

  it("should not allow user to login with wrong password", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal").contains("Login").click();
    cy.get("#loginForm").should("be.visible");
    cy.wait(1000);
    cy.get("#loginEmail").type(email);
    cy.get("#loginPassword").type(wrongPassword);
    cy.get("button[type=submit]").contains("Login").click();

    const expectedAlertText =
      "Either your username was not found or your password is incorrect";
    cy.on("window:alert", (text) => {
      expect(text).to.contains(expectedAlertText);
    });
  });

  it("should not allow user to login with wrong email", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal").contains("Login").click();
    cy.get("#loginForm").should("be.visible");
    cy.wait(1000);
    cy.get("#loginEmail").type(wrongEmail);
    cy.get("#loginPassword").type(password);
    cy.get("button[type=submit]").contains("Login").click();
  });

  it("should give access to profile page when logged in", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal").contains("Login").click();
    cy.get("#loginForm").should("be.visible");
    cy.wait(1000);
    cy.get("#loginEmail").type(email);
    cy.get("#loginPassword").type(password);
    cy.get("button[type=submit]").contains("Login").click();

    cy.wait(2000);
    cy.location("href").should("include", "view=profile&name");
  });
});
