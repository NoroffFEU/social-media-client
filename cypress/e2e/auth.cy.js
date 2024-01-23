describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(500); // waiting for the modal to fully initialize
  });

  describe('Successful Login', () => {
    it('allows the user to log in with valid credentials', () => {
      cy.fixture('login-data.json').then((loginData) => {
        const validUser = loginData.users.find(
          (user) => user.username === 'standard_user',
        );

        cy.get('#loginModalButton').click();
        cy.get('#loginModal').should('be.visible');

        cy.get('#loginEmail').invoke('val', validUser.email).trigger('input');
        cy.get('#loginEmail').should('have.value', validUser.email);

        cy.get('#loginPassword')
          .invoke('val', validUser.password)
          .trigger('input');
        cy.get('#loginPassword').should('have.value', validUser.password);

        cy.get('#loginForm').submit();
        cy.get('[data-auth="logout"]').should('be.visible');
      });
    });
  });

  describe('Invalid Login', () => {
    it('does not allow the user to log in with invalid credentials', () => {
      cy.fixture('login-data.json').then((loginData) => {
        const invalidUser = loginData.users.find(
          (user) => user.username === 'invalid_user',
        );

        cy.get('#loginModalButton').click();
        cy.get('#loginModal').should('be.visible');

        cy.get('#loginEmail').invoke('val', invalidUser.email).trigger('input');
        cy.get('#loginPassword')
          .invoke('val', invalidUser.password)
          .trigger('input');

        cy.on('window:alert', (text) => {
          expect(text).to.equal(
            'Either your username was not found or your password is incorrect',
          );
        });

        cy.get('#loginForm').submit();
      });
    });
  });

  describe('Logout', () => {
    it('allows the user to log out', () => {
      // Login the user first
      cy.fixture('login-data.json').then((loginData) => {
        const user = loginData.users.find(
          (user) => user.username === 'standard_user',
        );

        cy.get('#loginModalButton').click();
        cy.get('#loginModal').should('be.visible');

        cy.get('#loginEmail').invoke('val', user.email).trigger('input');
        cy.get('#loginPassword').invoke('val', user.password).trigger('input');

        cy.get('#loginForm').submit();
        cy.get('[data-auth="logout"]').should('be.visible');
      });

      // Mock logged in state
      cy.window().then((win) => {
        win.localStorage.setItem('auth', 'mock_token');
      });

      // Now test the logout functionality
      cy.get('[data-auth="logout"]').click();
      cy.get('[data-auth="login"]').should('be.visible'); // Verify the login button is visible again
    });
  });
});
