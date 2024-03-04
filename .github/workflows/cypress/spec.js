describe('My First Test', () => {
    it('Visits the homepage', () => {
      cy.visit('/');
      cy.contains('Welcome to My App');
    });
  });