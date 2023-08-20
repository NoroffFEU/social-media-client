describe('Login Page', () => {
  it('Should contain Login and Register links, and after a successful login, redirect, not show these links on dashboard, and show logout button', () => {
    // visit the login page
    cy.visit('http://localhost:5500/auth/login.html');

    // Find the Login link in the menu
    cy.get('#menu .nav-link').contains('Login').should('exist');

    // Find the Register link in the menu
    cy.get('#menu .nav-link').contains('Register').should('exist');

    // Find the input field with id "username" and type the username
    cy.get('#username').type('atuny0');

    // Find the input field with id "password" and type the password
    cy.get('#password').type('9uQFF1Lh');

    // Find the form with id "loginForm" and submit it
    cy.get('#loginForm').submit();

    // The url should be "/dashboard" after a successful login
    cy.url().should('include', '/dashboard');

    // The Login and Register links should not exist in the menu
    cy.get('#menu .nav-link').contains('Login').should('not.exist');
    cy.get('#menu .nav-link').contains('Register').should('not.exist');

    // The logout button should exist
    cy.get('.btn.btn-primary#logout').should('exist');
  });

  it('Should show an error message upon failed login attempt', () => {
    // visit the login page
    cy.visit('http://localhost:5500/auth/login.html'); // Replace 3000 with your port number

    // Find the input field with id "username" and type the incorrect username
    cy.get('#username').type('incorrectUsername');

    // Find the input field with id "password" and type the incorrect password
    cy.get('#password').type('incorrectPassword');

    // Find the form with id "loginForm" and submit it
    cy.get('#loginForm').submit();

    // Error message should be displayed
    cy.get('#message .alert.alert-danger').should(
      'contain',
      'Error: Either the username or password is incorrect'
    );
  });
});
