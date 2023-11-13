describe('Authentication Tests', () => {
  it("checks login", () => {
    cy.visit('https://caplix.github.io/social-media-client/');
    cy.wait(2000)
    cy.get("#registerForm > div.modal-footer > button.btn.btn-outline-success").click().wait(1000);
    cy.get('#loginEmail').type("tulling@stud.noroff.no");
    cy.get("#loginPassword").type("tulling1234");
    cy.get(".btn-success").contains("Login").click(); // Assuming the text on the button is "Login"
  });
});
