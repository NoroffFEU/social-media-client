describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.clearLocalStorage();
  });

  it('can login', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('.btn-close:visible').click({ force: true });
    cy.get("button[data-auth='login']:visible").click({ force: true });
    cy.wait(1500);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type('nastiksvastik10@stud.noroff.no');
    cy.get("input[type='password']:visible").should('exist').type('12345678');
    cy.get('.btn-success:visible').click({ force: true });
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
    cy.get('.btn-close:visible').click({ force: true });
    cy.get("button[data-auth='login']:visible").click({ force: true });
    cy.wait(1500);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type('fake@email.com');
    cy.get("input[type='password']:visible")
      .should('exist')
      .type('fakepassword');
    cy.get('.btn-success:visible').click({ force: true });
    cy.wait(3000);
    cy.then(() => expect(window.localStorage.getItem('profile')).to.be.null);
    cy.then(() => expect(window.localStorage.getItem('token')).to.be.null);
    cy.url().should('not.include', 'profile');
  });

  it('Validates password', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('.btn-close:visible').click();
    cy.get("button[data-auth='login']:visible").click({ force: true });
    cy.wait(1500);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type('nastiksvastik10@stud.noroff.no');
    cy.get("input[type='password']:visible").should('exist').type('12345678');
    cy.get('.btn-success:visible').click({ force: true });
    cy.wait(3000);
    cy.then(() => expect(window.localStorage.getItem('profile')).to.exist);
    cy.then(() => expect(window.localStorage.getItem('token')).to.exist);
    cy.url().should('include', 'profile');
  });
});
