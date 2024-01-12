describe('Register Test', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:6949/');
    cy.wait(500); // waiting for the modal to fully initialize
  });

  it('fails to register with invalid inputs', () => {
    // Testing name input with invalid and valid data
    cy.get('#registerName').should('be.visible').clear();
    cy.get('#registerName').type('InvalidName$£${enter}');
    cy.wait(500);
    cy.get('#registerName').clear();
    cy.get('#registerName').type('Averyvalidname{enter}');

    // Testing email input with invalid and valid data
    cy.get('#registerEmail').clear();
    cy.get('#registerEmail').type('invalidemail@error{enter}');
    cy.wait(500);
    cy.get('#registerEmail').clear();
    cy.get('#registerEmail').type('validemail@noroff.no{enter}');

    // Testing password input with invalid and valid data
    cy.get('#registerPassword').should('be.visible').clear();
    cy.get('#registerPassword').type('error{enter}');
    cy.wait(500);
    cy.get('#registerPassword').clear();
    cy.get('#registerPassword').type('validpassword{enter}');

    // Testing avatar URL input with invalid and valid data
    cy.get('#registerAvatar').clear();
    cy.get('#registerAvatar').type('invalidurl{enter}');
    cy.wait(500);
    cy.get('#registerAvatar').clear();
    cy.get('#registerAvatar').type('https://shorturl.at/lnryW{enter}');

    // Submitting the registration form
    // cy.get('#registerForm').submit();

    // cy.get('#registerModal .btn-close').click();
  });
});
