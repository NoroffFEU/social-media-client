describe("Login", () => {
  it("should login a user", () => {
    cy.visit("/");
    cy.wait(2000);
    // clicks the login button
    cy.get("#registerForm").within(() => {
      cy.contains("button", "Login").click();
    });
    cy.wait(2000);
    // fill out the form
    cy.get("#loginForm").within(() => {
      cy.get("input#loginEmail").type("not_a_noroff_email@email.com");
      cy.get("input#loginPassword").type("123132123");
      cy.contains("button", "Login").click();
    });
    cy.wait(2000);
    // assert that validation message is displayed
    cy.get("input:invalid#loginEmail")
      .invoke("prop", "validationMessage")
      .should("exist");
  });
});
