describe('Testing auth login, logout and error', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('Valid Log in', loginTestSuccess);
  it('Invalid log in', loginTestFailed);
  it('Log in and out', loginAndOut);
});

function loginTestSuccess() {
  const studEmail = 'test999@stud.noroff.no';
  const studPass = 'fiksy8-sysxix-humwAs';

  navigateToLoginForm();
  fillLoginData(studEmail, studPass);
  logIn();
}

function loginTestFailed() {
  const fakeEmail = 'studnotavailable@stud.noroff.no';
  const fakePass = 'notapassword-orisit?';

  navigateToLoginForm();
  fillLoginData(fakeEmail, fakePass);
  logIn();
}

function loginAndOut() {
  loginTestSuccess();
  logOut();
}

function navigateToLoginForm() {
  cy.get('#registerForm').should('be.visible');
  cy.wait(500);

  cy.get('[data-auth=login]').last().click();

  cy.get('#loginForm').should('be.visible');
  cy.wait(500);
}

function fillLoginData(email, pass) {
  cy.get('#loginEmail').type(email);
  cy.get('#loginPassword').type(pass);
}

function logIn() {
  cy.get('#loginForm').find('button[type="submit"]').click();
}

function logOut() {
  cy.get('[data-auth=logout]').last().click();
}
