describe('Social Media App: Unauthenticated user', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('CANNOT visit the profile page', () => {
    cy.visit('http://127.0.0.1:5500/?view=profile');
    cy.url().should(`not.include`, `profile`);
  });

  it('CANNOT visit the posts page', () => {
    cy.visit('http://127.0.0.1:5500/?view=posts');
    cy.url().should(`not.include`, `post`);
  });

  it('CAN view the register form', () => {
    cy.get("header [data-auth='register']").click({ force: true });
    cy.get('form button').contains('Create Profile').should('be.visible');
  });

  it('CAN view the login form', () => {
    cy.get('#registerModal button')
      .contains('Login')
      .should('be.visible')
      .click();
  });
});

describe('Social Media App: Authenticated user', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get('#registerModal button[type=reset]').click();
    cy.get('header button[data-auth=login]').click();
    cy.wait(1000);
    cy.get("#loginModal input[type='email']")
      .should('be.visible')
      .type(`ImBenni@noroff.no`);
    cy.wait(1000);
    cy.get("#loginModal input[type='password']")
      .should('exist')
      .type(`BenniBlanco{enter}`);
    cy.wait(1000);
  });

  it('CAN login', () => {
    cy.url().should('include', 'profile');
    cy.url().should('not.include', 'login');
    expect(localStorage.getItem('token')).to.not.be.null;
  });

  it('CAN logout', () => {
    cy.get('header button[data-auth=logout]')
      .click({ force: true })
      .should(() => {
        expect(localStorage.getItem('token')).to.be.null;
      });
    // cy.get("li.dropdown-item").contains(/log[\s]?out/i).click({force: true})
    // cy.url().should('include', 'login');
  });

  it('CAN make a new post', () => {
    cy.visit('http://127.0.0.1:5500/?view=post');
    cy.get('#postForm')
      .should('exist')
      .within(() => {
        cy.get('#postTitle').should('exist').type(`Cypress Test Title`);
        cy.get('#postTags').should('exist').type(`Cypress Test Tag`);
        cy.get('#postMedia').should('exist').type(`https://picsum.photos/200`);
        cy.get('#postBody').should('exist').type(`Cypress Test Body`);
        cy.wait(500);
        cy.get('button[data-action=submit]').click({ force: true });
      });
  });

  it('CAN delete an existing post', () => {
    cy.visit('http://127.0.0.1:5500/?view=profile&name=ImBenni');
    cy.wait(1000);
    // cy.get(".profile-posts").should("exist")
    cy.get(".profile-posts a[data-action='view']")
      .should('exist')
      .first()
      .click({ force: true });
    cy.wait(1000);
    cy.get('#nav-default').within(() => {
      cy.get("button[data-action='delete']").should('exist').click();
    });
  });
});
