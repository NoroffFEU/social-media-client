describe("Login & Logout", () => {
  it("Should login the user", () => {
    // visit home page
    cy.visit("http://127.0.0.1:5500/");

    //Waits for the Register modal to appear
    cy.wait(1000);

    // find the Login button in the register form
    cy.get(`#registerForm [data-auth="login"]`)
      .contains("Login")
      .should("exist");

    // Click the Login button
    cy.get(`#registerForm [data-auth="login"]`).contains("Login").click();

    //Waits for the Login modal to appear
    cy.wait(1000);

    // find the Login button in the login form
    cy.get(`#loginForm [type="submit"]`).contains("Login").should("exist");

    // fill the email input with a valid e-mail
    cy.get(`#loginForm #loginEmail`).type("MinBan66364@stud.noroff.no");

    // fill the password input with a valid input
    cy.get(`#loginForm #loginPassword`).type("Test1234");

    // Click the Login button
    cy.get(`#loginForm [type="submit"]`).contains("Login").click();

    // Intercepts the API call
    cy.intercept("https://nf-api.onrender.com/api/v1/social/auth/login").as(
      "login",
    );

    // Waits for API call to finish
    cy.wait("@login");

    // Clicks the logout button
    cy.get(`header [data-auth="logout"]`).contains("Logout").click();
  });
});
