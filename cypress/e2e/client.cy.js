describe('Authenticate user on Social Media App', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.wait(2000);
    cy.get("#registerForm .modal-header button[type='button']")
      .should('have.class', 'btn-close')
      .click();
    cy.get('header button[data-auth=login]').click();
    cy
      .get("#loginModal input[type='email']")
      .should('be.visible')
      .type(`me@noroff.no`),
      { delay: 3000 };
    cy
      .get("#loginModal input[type='email']")
      .should('have.value', 'me@noroff.no'),
      { delay: 300 };

    cy.wait(2000);
    cy
      .get("#loginModal input[type='password']")
      .should('be.visible')
      .type(`1234512345{enter}`),
      { delay: 200 };
    cy.wait(1000);
  });

  it('can login with valid credentials', () => {
    cy.url().should('include', 'profile');
    expect(localStorage.getItem('token')).to.not.be.null;
  });

  it('can make a new post', () => {
    cy.visit('/?view=post');
    cy.get('#postForm')
      .should('exist')
      .within(() => {
        cy.get("input[name='title']")
          .should('exist')
          .type(`title example with cypress test`);
        cy.get("input[name='tags']")
          .should('exist')
          .type(`tag example with cypress test`);
        cy.get("input[name='media']")
          .should('exist')
          .type(`https://www.vg.no/`);
        cy
          .get('#postBody')
          .should('exist')
          .type(`body example with cypress test`),
          { delay: 200 };
        cy.get("button[data-action='submit']").should('exist').click();
      });
    cy.wait(2000);
  });

  it('can log out by removing token from localStorage', () => {
    cy.get('button[data-auth=logout]')
      .contains(/log[\s]?out/i)
      .click({ force: true })
      .should(() => {
        expect(localStorage.getItem('token')).to.be.null;
      });
  });
});

describe('Unauthenticated user on Social Media App', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.clearLocalStorage();
  });
  it('can not visit the posts page', () => {
    cy.visit('/?view=posts');
    cy.wait(2000);
    cy.url().should('not.include', 'post');
  });
  it('can not visit the profile page', () => {
    cy.visit('/?view=profile');
    cy.wait(2000);
    cy.url().should('not.include', 'profile');
  });
});
