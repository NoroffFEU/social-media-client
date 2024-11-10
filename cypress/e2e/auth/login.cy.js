describe("Login Form", () => {
  beforeEach(() => {
    // Visit the root URL before each test
    cy.visit("/");
    cy.wait(500); // Wait for elements to load
  });

  it("Allows user to log in with valid credentials and email ending in @stud.noroff.no", () => {
    // Open the login form
    cy.get('#registerForm button[data-auth="login"]').click();
    cy.wait(500);

    // Enter valid Noroff email and password
    cy.get("#loginEmail").type("blobby@stud.noroff.no");
    cy.get("#loginPassword").type("11111111");

    // Submit the form
    cy.get("#loginForm").submit();
    cy.wait(500);

    // Assert that login was successful (check if logout button is visible)
    cy.get('button[data-auth="logout"]').should("be.visible");
  });

  it("Displays an error for non-Noroff student emails", () => {
    // Open the login form
    cy.get('#registerForm button[data-auth="login"]').click();
    cy.wait(500);

    // Enter an invalid email and valid password
    cy.get("#loginEmail").type("invaliduser@example.com");
    cy.get("#loginPassword").type("ValidPassword123");

    // Submit the form
    cy.get("#loginForm").submit();

    // Assert that an error message is shown for incorrect email format
    cy.get("#loginEmail")
      .invoke("prop", "validationMessage")
      .should("contain", "Please match the requested format");
  });

  it("Allows user to log out using the logout button", () => {
    // First, log in with valid credentials
    cy.get('#registerForm button[data-auth="login"]').click();
    cy.wait(500);

    cy.get("#loginEmail").type("blobby@stud.noroff.no");
    cy.get("#loginPassword").type("11111111");
    cy.get("#loginForm").submit();
    cy.wait(500);

    // Check that the logout button is visible after successful login
    cy.get('button[data-auth="logout"]').should("be.visible").click();

    // Assert that the user is logged out by checking if the login button is visible again
    cy.get('#registerForm button[data-auth="login"]').should("be.visible");
  });
});
