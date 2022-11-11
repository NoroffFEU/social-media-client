describe('Social Media App: Create post', () => {
  it('can log in', () => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.wait(500);
    cy.get('#registerForm > div.modal-footer > button')
      .contains('Login')
      .click();
    cy.wait(500);
    cy.get(
      '#loginForm > div.modal-body > div.form-floating > input[type=email]'
    ).type('mona.test@noroff.no');
    cy.get(
      '#loginForm > div.modal-body > div.form-floating > input[type=password]'
    ).type('123456789');
    cy.get('#loginForm > div.modal-footer > button').contains('Login').click();
  });
  it('can create new post', () => {
    cy.wait(1000);
    cy.get('#footerActions > a.btn').contains('New Post').click();
    cy.wait(500);
    cy.get('#postTitle').type('Post Title test');
    cy.get('#postTags').type('Post tags test');
    cy.get('#postMedia').type('https://unsplash.com/photos/2LowviVHZ-E');
    cy.get('#postBody').type('Post body test');
    cy.wait(500);
    cy.get('#postForm > div.col-12 > button').click();
    // Also added delete post so the testing don't clutter up the API
    cy.wait(5000);
    cy.get('div.post-actions > button').contains('Delete').click();
  });
});
