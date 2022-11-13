describe('Authentication', () => {
  // beforeEach(() => {
  //   cy.visit('/');
  //   cy.clearLocalStorage();
  // });

  it('will login', () => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get('.btn-close:visible').click({ force: true });
    cy.get("button[data-auth='login']:visible")
      .contains('Login')
      .click({ force: true });
    cy.wait(1500);
    cy.get('#loginForm').within(() => {
      cy.get("input[type='email']").type(
        'cocomarcia@noroff.no',
        { force: true },
        { delay: 100 }
      );
    });
    cy.wait(3000);
    cy.get("input[type='password']:visible")
      .should('exist')
      .type('cocomarcia1', { force: true }, { delay: 100 });
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
    cy.get('#loginForm').within(() => {
      cy.get("input[type='email']").type(
        'cocomarcia@noroff.no',
        { force: true },
        { delay: 100 }
      );
    });
    cy.get("input[type='password']:visible")
      .should('exist')
      .type('cocomarcia1', { force: true }, { delay: 100 });
    cy.get('.btn-success:visible').click({ force: true });
    cy.wait(3000);
    cy.then(() => expect(window.localStorage.getItem('profile')).to.exist);
    cy.then(() => expect(window.localStorage.getItem('token')).to.exist);
    cy.url().should('include', 'profile');
  });

  it('Validates password', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('.btn-close:visible').click({ multiple: true });
    cy.get("button[data-auth='login']:visible").click({ force: true });
    cy.wait(1500);
    cy.get('#loginForm').within(() => {
      cy.get("input[type='email']").type(
        'cocomarcia@noroff.no',
        { force: true },
        { delay: 100 }
      );
    });
    cy.get("input[type='password']:visible")
      .should('exist')
      .type('cocomarcia1', { force: true }, { delay: 100 });
    cy.get('.btn-success:visible').click({ force: true });
    cy.wait(3000);
    cy.then(() => expect(window.localStorage.getItem('profile')).to.exist);
    cy.then(() => expect(window.localStorage.getItem('token')).to.exist);
    cy.url().should('include', 'profile');
  });
});
