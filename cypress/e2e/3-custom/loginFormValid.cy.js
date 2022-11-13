describe("The login form VALIDATES user inputs CORRECTLY based on API restrictions", () => {
  it("validates and logs in", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.get("button").contains("Login").should("be.visible").click();
    cy.get("input[type='email']").should("exist").type("testtest@noroff.no");
    cy.get("input[type='password']")
      .should("exist")
      .type(`passwordworking{enter}`);
    cy.wait(2000);
  });
});
