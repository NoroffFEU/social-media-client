describe('Login and validate user input', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit('/');
    cy.wait(1000);
    cy.get('.btn-close:visible').click({ force: true });
    cy.get("button[data-auth='login']:visible").click({ force: true });
    cy.wait(1000);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type('nastiksvastik10@stud.noroff.no');
    cy.get("input[type='password']:visible").should('exist').type('12345678');
    cy.get('.btn-success:visible').click({ force: true });
    cy.wait(2000);
    cy.then(
      () => expect(window.localStorage.getItem('profile')).to.not.be.null
    );
    cy.then(() => expect(window.localStorage.getItem('token')).to.not.be.null);
    cy.url().should('include', 'profile');
  });

  it('Validates post title input', () => {
    cy.get("footer [data-visible='loggedIn']:visible")
      .contains('New Post')
      .click();
    cy.get('#postTitle:visible').should('exist');
    cy.get('#postTitle:visible').type('New blog post title');
    cy.get('#postTitle:visible').should('have.value', 'New blog post title');
    cy.get('#postTags:visible').should('exist').type('muppet, test, e2e');
    cy.get('#postMedia:visible')
      .should('exist')
      .type('https://media.tenor.com/02_TN4di1JQAAAAC/run-forrest-puppet.gif');
    cy.get('#postBody:visible').should('exist').type('Hello post');
    cy.get("span[data-action='publish']:visible").should('exist').click();
    cy.url().should('include', 'post');
  });
});
