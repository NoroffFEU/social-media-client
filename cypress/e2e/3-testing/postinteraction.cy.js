describe('Post Interaction Test', () => {
  before(() => {
    cy.visit('/');
    cy.wait(500);

    // Log in with valid credentials
    cy.get('#modalLoginBtn').click();
    cy.get('#loginEmail').clear();
    const loginEmail = Cypress.env('TEST_EMAIL');
    cy.wait(300);
    cy.get('#loginEmail').type(`${loginEmail}{enter}`);

    cy.get('#loginPassword').clear();
    const loginPsw = Cypress.env('TEST_PASSWORD');
    cy.get('#loginPassword').type(`${loginPsw}{enter}`);

    cy.wait(500);
    cy.get('a[href="./"]').click();

    cy.wait(500);
    cy.window().then(window => {
      const profile = window.localStorage.getItem('profile');
      const token = window.localStorage.getItem('token');
      expect(profile).to.not.be.null;
      expect(token).to.not.be.null;
    });
    cy.log('Token KEY and profile information in good order');
  });

  it('reacts to the first post successfully and verifies page reload', () => {
    // Openng the reaction menu for the first post
    cy.get('.post .dropdown-toggle').first().click();

    // Getting the post ID of the first post
    cy.get('.post')
      .first()
      .find('button[data-post-id]')
      .invoke('attr', 'data-post-id')
      .then(postId => {
        cy.get(`button[data-symbol="😀"][data-post-id="${postId}"]`).click();
        cy.wait(2000);
        cy.log('Reaction test successful');
        cy.get(`a[href="./?view=post&postId=${postId}"]`).first().click();

        cy.wait(2000);

        const testComment = Cypress.env(`TESTCOMMENT`);
        cy.get('textarea#commentBody').type(testComment);
        cy.get('form.comment-form button[type="submit"]').click();

        cy.wait(2000);

        // Verifying that the comment is present
        cy.get('.comment').should(
          'contain.text',
          'Cypress automated commenting test'
        );
        cy.log('Comment test successful');
      });
    cy.log('FINISHED');
  });
});
