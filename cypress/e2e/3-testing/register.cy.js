describe('Register Test', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(500); // waiting for the modal to fully initialize
  });

  it('fails to register with invalid inputs', () => {
    // Testing name input with invalid and valid data
    cy.get('#registerName').should('be.visible').clear();
    cy.get('#registerName').type('InvalidName---{enter}');
    cy.wait(500);
    cy.get('#registerName').clear();
    const registrationUsername = Cypress.env('REGISTRATION_USER_NAME');
    cy.get('#registerName').type(`${registrationUsername}{enter}`);
    cy.log('Username input ok!');
    // Testing email input with invalid and valid data
    cy.get('#registerEmail').clear();
    cy.get('#registerEmail').type('invalidemail@error{enter}');
    cy.wait(500);
    cy.get('#registerEmail').clear();
    const registrationEmail = Cypress.env('TEST_EMAIL');
    cy.get('#registerEmail').type(`${registrationEmail}{enter}`);
    cy.log('Email input ok!');
    // Testing password input with invalid and valid data
    cy.get('#registerPassword').should('be.visible').clear();
    cy.get('#registerPassword').type('error{enter}');
    cy.wait(500);
    cy.get('#registerPassword').clear();
    const registrationPsw = Cypress.env('TEST_PASSWORD');
    cy.get('#registerPassword').type(`${registrationPsw}{enter}`);
    cy.log('Password input ok!');
    // Testing avatar URL input with invalid and valid data
    cy.get('#registerAvatar').clear();
    cy.get('#registerAvatar').type('invalidurl{enter}');
    cy.wait(500);
    cy.get('#registerAvatar').clear();
    const registrationIMG = Cypress.env('REGISTRATION_IMG');
    cy.get('#registerAvatar').type(`${registrationIMG}{enter}`);
    cy.log('avatar/media input ok!');
    cy.log('FINISHED');
  });
});
