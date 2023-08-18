describe("login test", () => {
  it("can search for Social Media Website, swich from register page to login page, log in", () => {
    // visit the page
    cy.visit("http://127.0.0.1:5500/");

    // check if the register modal exist
    cy.get("#registerModal .btn").contains("Login").should("exist");
    cy.wait(1000);

    // move to the login modal
    cy.get("#registerModal .btn").contains("Login").click();
    cy.get("#loginForm .btn").contains("Login").should("exist");
    cy.wait(1000);

    // type email and password and submit
    cy.get("#loginEmail").type("cor@stud.noroff.no");
    cy.wait(1000);
    cy.get("#loginPassword").type("loginpass");
    cy.get("#loginForm").submit();

    // check if it enter to che profile page
    cy.url().should("include", "profile");
  });
});
