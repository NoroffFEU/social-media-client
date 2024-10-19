// cypress/e2e/sample_test.cy.js
describe('Sample Test', () => {
  it('Visits the app', () => {
    cy.visit('http://localhost:8080'); // Ensure this URL matches your app
    cy.contains('Some text'); // Replace with actual text on your page
  });
});
