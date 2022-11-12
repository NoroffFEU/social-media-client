describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.clearLocalStorage();
  });

  it('will login', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('.btn-close:visible').click();
    cy.wait(500);
    cy.get("button.btn-outline-success[data-auth='login']:visible")
      .contains('Login')
      .click();
    cy.wait(1500);
    cy.get("#loginModal input[type='email']:visible")
      .should('exist')
      .type('cocomarcia@noroff.no');
    cy.get("#loginModal input[type='password']#loginPassword:visible")
      .should('exist')
      .type('cocomarcia1');
    cy.get('button.btn-success:visible').click();
    cy.wait(3000);
    cy.then(
      () => expect(window.localStorage.getItem('profile')).to.not.be.null
    );
    cy.then(() => expect(window.localStorage.getItem('token')).to.not.be.null);
    cy.url().should('include', 'profile');
  });

  it('Validates email input', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('.btn-close:visible').click();
    cy.wait(500);
    cy.get("#registerForm button[data-auth='login']:visible").click();
    cy.wait(1500);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type('cocomarcia@noroff.no');
    cy.get("input[type='password']:visible")
      .should('exist')
      .type('cocomarcia1');
    cy.get('.btn-success:visible').click();
    cy.wait(3000);
    cy.then(() => expect(window.localStorage.getItem('profile')).to.exist);
    cy.then(() => expect(window.localStorage.getItem('token')).to.exist);
  });

  it('Validates password', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('.btn-close:visible').click();
    cy.wait(500);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(1500);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type('cocomarcia@noroff.no');
    cy.get("input[type='password']:visible")
      .should('exist')
      .type('cocomarcia1');
    cy.get('.btn-success:visible').click();
    cy.wait(3000);
    cy.then(() => expect(window.localStorage.getItem('profile')).to.exist);
    cy.then(() => expect(window.localStorage.getItem('token')).to.exist);
    cy.url().should('include', 'profile');
  });
});
