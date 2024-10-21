describe("Invalid login Functionality", () => {
  it("should log in a user with valid credentials", () => {
    // Visit the login page
    cy.visit("/");

    // Fill out the email and password fields
    cy.get("#email").type("invalidemail@google.com");
    cy.get("#password").type("INVALID-PASSWORD");

    // Submit the login form
    cy.get('button[type="submit"]').click();

    // Check if the login was successful
    cy.get("#statusMessage").should(
      "contain",
      "Login failed: Invalid email or password",
    ); // Check for failure message
    cy.get("#statusMessage").should("have.class", "error"); // Check for status message class
    cy.url().should("not.include", "/post/get-all-posts.html"); // Check to ensure URL is unchanged

    // Verify the token and name is saved in localStorage
    cy.window().then((window) => {
      const token = window.localStorage.getItem("token");
      const name = window.localStorage.getItem("name");
      expect(token).to.not.exist;
      expect(name).to.not.exist;
    });
  });
});
