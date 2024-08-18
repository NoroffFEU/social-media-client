describe("An invalid login to the Noroff Social App", () => {
  it("When provided incorrect credentials, user should not get a valid login page", () => {
    cy.visit("/");

    cy.fixture("loginInvalid.json").then((loginValid) => {
      cy.get("input#loginEmail").type(loginValid.email, { force: true });
      cy.get("input#loginPassword").type(loginValid.password, { force: true });
    });

    // Perform login action
    cy.get('button[type="submit"]').contains("Login").click({ force: true });

    cy.get("form#loginForm").then(($form) => {
      if ($form[0].checkValidity()) {
        // Form is valid, no validation error
      } else {
        // Form is invalid, validation error has been triggered
        cy.get("input#loginEmail").then(($input) => {
          expect($input[0].validationMessage).not.to.be.null;
        });
      }
    });
  });
});
