describe("Logout Functionality Test", () => {
  before(() => {
    cy.visit("/index.html");

    // Log in with valid credentials
    cy.intercept("POST", "**/auth/login", {
      statusCode: 200,
      body: {
        token: "validToken123",
        profile: { email: "valid@stud.noroff.no", name: "Valid User" },
      },
    }).as("loginRequest");

    // Open the login modal and fill the form
    cy.get('button[data-bs-target="#loginModal"]').first().click();
    cy.get("#loginEmail").type("valid@stud.noroff.no");
    cy.get("#loginPassword").type("validpassword");
    cy.get("#loginForm").submit();

    // Wait for the login request to complete
    cy.wait("@loginRequest");
  });

  it("should log out successfully when clicking the logout button", () => {
    // Click the logout button
    cy.get('[data-auth="logout"]').click();

    // Check if redirected to the home page
    cy.url().should("eq", `${Cypress.config().baseUrl}/`); // Ensure the base URL is correct

    // Check that local storage is cleared
    cy.window().then((win) => {
      expect(win.localStorage.getItem("token")).to.be.null;
      expect(win.localStorage.getItem("profile")).to.be.null;
    });
  });
});
