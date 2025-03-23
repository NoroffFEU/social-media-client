describe("Logout Functionality", () => {
  const validCredentials = {
    email: "test@noroff.no",
    password: "password123",
  };

  beforeEach(() => {
    cy.visit("/");
    cy.wait(500);

    cy.get("body").then(($body) => {
      if ($body.find("#registerModal.show").length > 0) {
        cy.get("#registerModal .btn-close").click();
        cy.wait(300);
      }
    });

    cy.intercept("POST", "**/auth/login", {
      statusCode: 200,
      body: {
        accessToken: "fake-token",
        name: "Test User",
        email: validCredentials.email,
      },
    }).as("login");

    cy.get("button[data-auth='login']").first().click();
    cy.wait(300);

    cy.get("input#loginEmail").type(validCredentials.email);
    cy.get("input#loginPassword").type(validCredentials.password);
    cy.get("form#loginForm").submit();

    cy.wait("@login");
    cy.get("button[data-auth='logout']").should("be.visible");
  });

  it("should log out when clicking the logout button", () => {
    cy.get("button[data-auth='logout']").click();
    cy.get("button[data-auth='logout']").should("not.be.visible");
    cy.get("button[data-auth='login']").should("be.visible");

    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      expect(token).to.be.null;
    });
  });
});
