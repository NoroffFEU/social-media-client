Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Unexpected token')) {
    expect(err.message).to.not.include('Unexpected token');
  }
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
