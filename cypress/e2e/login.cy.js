//rohit_kumar@stud.noroff.no
//rohit123456

describe('auth login', () => {
  beforeEach(() => {
    cy.visit('https://rohitamdahl.github.io/social-media-client-ca/');
    cy.clearLocalStorage();
  });
  it('login with valid username and password', () => {
    cy.visit('https://rohitamdahl.github.io/social-media-client-ca/', {
      delay: 1500,
    });
    cy.title().should('contain', 'Client');
    cy.title().should('eq', 'Test Client');
    cy.get('#registerForm .btn-close:visible').click();
    cy.wait(2000);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(2500);
    cy.get("input[type='email']:visible")
      .type('rohit_kumar@stud.noroff.no')
      .should('have.value', 'rohit_kumar@stud.noroff.no');
    cy.get('#loginForm #loginPassword')
      .type('rohit123456')
      .should('have.value', 'rohit123456');
    cy.get('.btn-success:visible').click();
    cy.wait(2900);
    cy.then(
      () => expect(window.localStorage.getItem('profile')).to.not.be.null
    );
    cy.then(() => expect(window.localStorage.getItem('token')).to.not.be.null);
    cy.url().should('include', 'profile');
  });

  it('cannot submit the login form with invalid credentials', () => {
    cy.visit('https://rohitamdahl.github.io/social-media-client-ca/', {
      delay: 1500,
    });
    cy.title().should('contain', 'Client');
    cy.title().should('eq', 'Test Client');
    cy.get('#registerForm .btn-close:visible').click();
    cy.wait(2000);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(2500);
    cy.get("input[type='email']:visible")
      .type('syss@syss.com')
      .should('have.value', 'syss@syss.com');
    cy.get('#loginForm #loginPassword')
      .type('rohit123456')
      .should('have.value', 'rohit123456');
    cy.wait(2500);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(2500);
    cy.then(() => expect(window.localStorage.getItem('profile')).to.be.null);
    cy.then(() => expect(window.localStorage.getItem('token')).to.be.null);
    cy.url().should('not.include', 'profile');
    cy.on('window:alert', (alert) =>
      expect(alert).to.be.equal('username or password is incorrect')
    );
  });
});
