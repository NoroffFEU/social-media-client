describe('validates user inputs', () => {
  it('User can log in', () => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get('form#registerForm > div.modal-footer > button')
      .contains('Login')
      .click();
    cy.wait(1000);
    cy.get(
      'form#loginForm > div.modal-body > div.form-floating > input[type=email]'
    ).type('per@noroff.no');
    cy.get(
      'form#loginForm > div.modal-body > div.form-floating > input[type=password]'
    ).type('pernoroff');
    cy.get('form#loginForm > div.modal-footer > button')
      .contains('Login')
      .click();
  });
  it('User can post', () => {
    cy.wait(3000);
    cy.get('#footerActions > a.btn').contains('New Post').click();
    cy.wait(3000);
    cy.get('#postTitle').type('Testing cypress');
    cy.get('#postTags').type('cypress spam');
    cy.get('#postMedia').type('https://picsum.photos/200/300?random=1');
    cy.get('#postBody').type('Post will be deleted in 15 seconds');
    cy.get('#postForm > div.col-12 > button').click({ force: true });
    cy.wait(15000);
    cy.get('div.post-actions > button').contains('Delete').click();
  });
});
