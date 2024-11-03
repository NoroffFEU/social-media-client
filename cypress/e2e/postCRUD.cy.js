describe('CRUD Functionality - Create, Validate, and Delete Post', () => {
  beforeEach(() => {
    cy.visit('https://norofffeu.github.io/social-media-client/');
    cy.log('Opened the homepage.');
    cy.wait(1000); // Wait for the page to load

    // Log in to set up the test
    cy.log('Opening the login modal.');
    cy.get("button[data-bs-target='#loginModal']:visible").first().click();
    cy.wait(1000); // Wait for the login modal to appear

    cy.log('Entering valid email and password.');
    cy.get("input[id='loginEmail']").type('eskander123@noroff.no', {
      force: true,
    });
    cy.get("input[id='loginPassword']").type('Eskander1', { force: true });

    cy.log('Submitting the login form.');
    cy.get("form#loginForm button[type='submit']").click({ force: true });
    cy.wait(1000); // Wait for the login to complete

    // Check if the user is logged in by verifying the URL change
    cy.url().should(
      'not.eq',
      'https://norofffeu.github.io/social-media-client/'
    );
    cy.log('User logged in successfully.');
  });

  it('should create a new post and validate it', () => {
    // Click "New Post" to open the form
    cy.log('Opening the new post form.');
    cy.get("a[href='./?view=post'][data-visible='loggedIn']").click();
    cy.wait(1000); // Wait for the form to load
    cy.screenshot('new-post-form-opened');

    // Fill out the post details
    cy.log('Typing the title, tags, and content.');
    cy.get('input#postTitle').type('Testing', { force: true });
    cy.get('input#postTags').type('cypress', { force: true });
    cy.get('textarea#postBody').type('Hello, this is Eskander testing', {
      force: true,
    });
    cy.screenshot('post-content-entered');

    // Submit the form to create the post
    cy.log('Submitting the post form.');
    cy.get("form#postForm button[type='submit']").click({ force: true });
    cy.wait(1000); // Wait for the post to be created
    cy.screenshot('post-submitted');

    // Check that the post is displayed
    cy.log('Checking that the post is visible.');
    cy.get('.card.mb-3.thumbnail.post.fade-in').should('exist');
    cy.get('.card-header b').should('contain.text', 'Testing');
    cy.get('.card-header span').should(
      'contain.text',
      'Hello, this is Eskander testing'
    );
    cy.get('.post-tags .badge').should('contain.text', 'cypress');
    cy.screenshot('post-validated');

    // Delete the post to clean up
    cy.log('Deleting the post.');
    cy.get('.post-actions button[data-action="delete"]').first().click();
    cy.wait(1000); // Wait for the post to be deleted
    cy.screenshot('post-deleted');
  });
});
