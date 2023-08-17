describe("login test", () => {
  it("can search for Social Media Website", () => {
    cy.visit("http://127.0.0.1:5500/");

    cy.get("#registerModal .btn").contains("Login").should("exist");

    cy.wait(1000);

    // move to the login modal

    cy.get("#registerModal .btn").contains("Login").click();

    cy.get("#loginForm .btn").contains("Login").should("exist");

    cy.wait(1000);

    //

    cy.get("#loginEmail").type("cor@stud.noroff.no");

    cy.wait(1000);

    cy.get("#loginPassword").type("loginpass");

    cy.get("#loginForm").submit();

    cy.url().should("include", "profile");

    // // cy.get("h1").contains("Noroff");
  });
});
