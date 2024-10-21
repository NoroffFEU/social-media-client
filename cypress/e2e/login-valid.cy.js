describe("Valid login functionality", () => {
  it("should log in a user with valid credentials", () => {
    // Visit the login page
    cy.visit("/");

    // Fill out the email and password fields
    cy.get("#email").type("BKA@stud.noroff.no");
    cy.get("#password").type("Deadpool-2002");

    // Submit the login form
    cy.get('button[type="submit"]').click();

    // Check if the login was successful
    cy.get("#statusMessage").should("contain", "Login successful"); // Check for success message
    cy.get("#statusMessage").should("have.class", "success"); // Check for status message class
    cy.url().should("include", "/post/get-all-posts.html"); // Check for URL change

    // Verify the token and name is saved in localStorage
    cy.window().then((window) => {
      const token = window.localStorage.getItem("token");
      const name = window.localStorage.getItem("name");
      expect(token).to.exist;
      expect(name).to.exist;
    });
  });
});
