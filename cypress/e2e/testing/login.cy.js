it("Login user", () => {
  cy.visit("/");
  cy.wait(2000);

  cy.get("#registerForm [data-auth=login]").click();

  cy.wait(2000);

  cy.get("#loginEmail").type("linda@stud.noroff.no");
  cy.get("#loginPassword").type("Test1234");
  cy.get("#loginForm .btn-success").click();

  cy.wait(2000);

  cy.window().then((win) => {
    const token = win.localStorage.getItem("token");
    expect(token).to.not.be.null;
  });

  //logout

  cy.get(".text-end .btn-outline-warning").click();

  cy.wait(2000);

  cy.window().then((win) => {
    const token = win.localStorage.getItem("token");
    expect(token).to.be.null;
  });
});
