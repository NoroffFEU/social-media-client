describe("Login Functionality", () => {
  const validCredentials = {
    email: "test@noroff.no",
    password: "password123",
  };

  const invalidCredentials = {
    email: "invalid@email.com",
    password: "wrongpassword",
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
  });

  it("should log in with the login form with valid credentials", () => {
    // Match what your application is expecting - the key name should match what the app uses
    cy.intercept("POST", "**/auth/login", {
      statusCode: 200,
      body: {
        // Your app is looking for 'token', not 'accessToken'
        token: "fake-token", // Changed from accessToken to token
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

    cy.get("button[data-auth='logout']").should(
      "have.attr",
      "data-visible",
      "loggedIn",
    );

    // Allow more time for localStorage to be updated
    cy.wait(100); // Brief wait to ensure localStorage has been updated

    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      expect(token).to.exist;
    });
  });

  it("should not submit the login form with invalid credentials and is shown a message", () => {
    cy.intercept("POST", "**/auth/login", {
      statusCode: 401,
      body: {
        message:
          "Either your username was not found or your password is incorrect",
      },
    }).as("loginFailed");

    cy.window().then((win) => {
      cy.stub(win, "alert").as("alertStub");
    });

    cy.get("button[data-auth='login']").first().click();
    cy.wait(300);

    cy.get("input#loginEmail").type(invalidCredentials.email);
    cy.get("input#loginPassword").type(invalidCredentials.password);
    cy.get("form#loginForm").submit();

    cy.wait("@loginFailed");

    cy.get("@alertStub").should(
      "have.been.calledWithMatch",
      /username was not found/i,
    );

    cy.get("button[data-auth='logout']")
      .should("have.attr", "data-visible", "loggedIn")
      .should("not.be.visible");

    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      expect(token).to.be.null;
    });
  });
});
