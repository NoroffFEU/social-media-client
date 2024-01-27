describe('Login', () => {
  it('passes', () => {
    cy.visit('index.html');
    cy.clearAllLocalStorage();

    cy.wait(500);
    cy.get("form[id='registerForm'").within(() => {
      cy.get("button[data-bs-target='#loginModal']:visible").click({
        multiple: true,
      });
    });
  });
});
