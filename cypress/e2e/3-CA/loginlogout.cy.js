describe("User Login and Profile Access", () => {
  it("successfully logs in and accesses profile", () => {
    cy.visit("http://localhost:5500/index.html");

    //More to login modal
    cy.get("#testLogInModal").contains("Login").should("exist");
    cy.wait(1000);

    cy.get("#testLogInModal").contains("Login").click();
    cy.wait(1000);

    // Fill in form
    cy.get("#loginForm .btn").contains("Login").should("exist");
    cy.get("#loginEmail").type("IngSan57492@stud.noroff.no");
    cy.wait(1000);
    cy.get("#loginPassword").type("passWord");

    //Submit form
    cy.wait(1000);
    cy.get("#loginForm").submit();

    // User is redirected to profile page
    cy.url().should("include", "profile");
    cy.wait(1000);

    // The user can log out
    cy.get(".btn").contains("Logout").should("exist").click();
    // Assert that the user is logged out
    cy.url().should("not.include", "profile");
  });
});
