describe('User Authentication', () => {
  beforeEach(() => {
    cy.visit('https://app.noroff.dev/login');
  });

  it('can log in and access their profile', () => {
    cy.fixture('user').then((user) => {
      cy.get('input[name=username]').type(user.email); // uses email from fixture
      cy.get('input[name=password]').type(user.password); // uses password from fixture
      cy.get('button[type=submit]').click();

      cy.url().should('eq', 'https://app.noroff.dev/profile');
      cy.contains('Your Profile Header or some unique text'); // replace with some unique text or header from the profile page
    });
  });

  it('cannot submit the login form with invalid credentials', () => {
    cy.get('input[name=username]').type('invalid-username');
    cy.get('input[name=password]').type('invalid-password');
    cy.get('button[type=submit]').click();

    // Check for an error message
    cy.contains('Invalid credentials').should('be.visible');
  });

  it('can log out with the logout button', () => {
    cy.fixture('user').then((user) => {
      cy.get('input[name=username]').type(user.email); // uses email from fixture for login
      cy.get('input[name=password]').type(user.password); // uses password from fixture for login
      cy.get('button[type=submit]').click();

      cy.get('button#logout').click();
      cy.url().should('eq', 'https://app.noroff.dev/login');
    });
  });
});
