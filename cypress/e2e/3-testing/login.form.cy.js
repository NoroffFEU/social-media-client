describe("Login Form - Valid Credentials", () => {
  beforeEach(() => {
    cy.visit("/index.html");
  });

  it("should log in with valid credentials and redirect to the profile page", () => {
    // Intercept the login request with a valid response
    cy.intercept("POST", "**/auth/login", {
      statusCode: 200,
      body: {
        token: "validToken123",
        profile: { email: "valid@stud.noroff.no", name: "Valid User" },
      },
    }).as("loginRequest");

    // Open the login modal
    cy.get('button[data-bs-target="#loginModal"]').first().click();

    // Fill in the login form with valid credentials
    cy.get("#loginEmail").type("valid@stud.noroff.no");
    cy.get("#loginPassword").type("validpassword");

    // Submit the login form
    cy.get("#loginForm").submit();

    // Wait for the login request to complete
    cy.wait("@loginRequest");

    // Check localStorage for the token
    cy.window().then((win) => {
      expect(win.localStorage.getItem("token")).to.eq("validToken123");
      const profile = JSON.parse(win.localStorage.getItem("profile"));
      expect(profile).to.have.property("email", "valid@stud.noroff.no");
    });

    // Check URL and page content
    cy.url().should("include", "/profile");
    cy.contains("Valid User");
  });
});
