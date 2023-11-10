describe("Login Functionality", () => {
  /* SUCCESSFUL ATTEMPTS */
  it("successfully logs in and fetches the token", () => {
    // Visit the login page
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.wait(500);

    // Waits for the register form to be visible

    cy.get("#registerForm").should("be.visible");

    // Waits for the login button to appear and clicks it.
    cy.get('button[data-bs-target="#loginModal"]')
      .should("be.visible")
      .last()
      .click();

    cy.wait(500);

    // Waits for the h5 with "Login" to appear, then types in the login credentials
    cy.get("h5[id=loginModalLabel]").should("be.visible");

    cy.get("input[id=loginEmail]").type("thistestuser@stud.noroff.no");
    cy.get("input[id=loginPassword]").type("qwe123***");

    // Intercept the login request
    cy.intercept(
      "POST",
      "https://nf-api.onrender.com/api/v1/social/auth/login"
    ).as("loginRequest");

    // Submits the credentials
    cy.get('.modal-footer > button[type="submit"]')
      .should("be.visible")
      .first()
      .click();

    // Wait for and capture the response from the login request
    cy.wait("@loginRequest").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.response.body).to.have.property("accessToken");
    });
    // Assert the URL change after successful login
    cy.url().should(
      "eq",
      "http://127.0.0.1:5500/?view=profile&name=thistestuser"
    );

    // Assert the profile information is correctly stored in local storage
    cy.window()
      .its("localStorage")
      .invoke("getItem", "profile")
      .should("include", "thistestuser");
  });
  /* FAILED ATTEMPTS */
  it("login fails due to wrong email type and shows an error message", () => {
    // Visit the login page
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.wait(500);

    // Open the login modal
    cy.get('button[data-bs-target="#loginModal"]').last().click();

    cy.wait(500);

    // Type in invalid login credentials
    cy.get("input[id=loginEmail]").type("wronguser@example.com");
    cy.get("input[id=loginPassword]").type("wrongpassword");

    // Submit the login form
    cy.get('.modal-footer > button[type="submit"]').first().click();
  });
  //
  it("fails to log in with invalid credentials and shows an error message", () => {
    // Visit the login page
    cy.visit("http://127.0.0.1:5500/index.html");

    cy.wait(500);

    // Open the login modal
    cy.get('button[data-bs-target="#loginModal"]').last().click();

    cy.wait(500);

    // Intercept the POST request and alias it
    cy.intercept(
      "POST",
      "https://nf-api.onrender.com/api/v1/social/auth/login"
    ).as("loginRequest");

    // Type in invalid login credentials
    cy.get("input[id=loginEmail]").type("thistestuser@noroff.no");
    cy.get("input[id=loginPassword]").type("wrongpassword");

    // Submit the login form
    cy.get('.modal-footer > button[type="submit"]').first().click();

    // Wait for and verify the response from the login request
    cy.wait("@loginRequest").then((interception) => {
      expect(interception.response.statusCode).to.eq(401); // Asserting 401 Unauthorized
    });
  });
  //
});
