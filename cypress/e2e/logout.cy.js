export const apiBase = 'https://nf-api.onrender.com/api/v1/';
export const url = new URL(apiBase);

describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.clearLocalStorage();
  });

  it('can login', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('.btn-close:visible').click();
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
    cy.then(
      () => expect(window.localStorage.getItem('profile')).to.not.be.null
    );
    cy.then(() => expect(window.localStorage.getItem('token')).to.not.be.null);
    cy.url().should('include', 'profile');
  });

  it('can logout', () => {
    cy.get('.btn-close:visible').click();
    cy.wait(500);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(500);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type(`testersen@noroff.no`);
    cy.get("input[type='password']:visible")
      .should('exist')
      .type(`Mypassword{enter}`);
    cy.wait(2000);
    cy.url().should('include', 'profile');
    cy.get("button[data-auth='logout']:visible")
      .click({ force: true })
      .should(() => {
        expect(localStorage.getItem('token')).to.be.null;
      });
  });
});
