describe("Login", () => {
  it("The existing user can login ", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerForm").contains("Login").click();
    cy.wait(1000);
    cy.get("#loginEmail").type("sayed12345@stud.noroff.no");
    cy.get("#loginPassword").type("12345678");
    cy.get("button[type=submit]").contains("Login").click();
  });

  it("can not login if user does not exist ", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerForm").contains("Login").click();
    cy.wait(1000);
    cy.get("#loginEmail").type("adriantesting@gmail.com");
    cy.get("#loginPassword").type("adrianjs");
    cy.get("button[type=submit]").contains("Login").click();
  });
});

describe("Logout", () => {
  it("should login an existing user", () => {
    // Visit the login page
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerForm").contains("Login").click();
    cy.wait(1000);
    cy.get("#loginEmail").type("adriantesting@stud.noroff.no");
    cy.get("#loginPassword").type("adrianjs2");
    cy.get("button[type=submit]").contains("Login").click();
  });

  it("loged in user can log out and clear the token", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(1000);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type("adriantesting@stud.noroff.no");
    cy.get("#loginPassword").type("adrianjs2");
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(1000);
    cy.get("button[data-auth=logout]").contains("Logout").click();
    cy.wait(1000);
  });
});
