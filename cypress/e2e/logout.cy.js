describe('Logging out', () => {
  beforeEach(() => {
    cy.visit('./index.html');
    cy.clearLocalStorage();
  });

  it('logs in and then logs out again', () => {
    // Logs the user in with email and password
    cy.visit('./index.html');
    cy.wait(800);
    cy.get('#registerModal button[type=button]').contains('Login').click();
    cy.wait(1000);
    cy.get("input[type='email']:visible").type('rebekkatest@noroff.no', {
      delay: 300,
    });
    cy.get("input[type='password']:visible").type('12345678', { delay: 300 });
    cy.get('button[type=submit]').contains('Login').click();
    cy.wait(600);

    // Logs the user out
    cy.get("button[data-auth='logout']:visible").should('exist').click();
    cy.window().then((win) => {
      expect(win.localStorage.getItem('token')).to.be.null;
      expect(win.localStorage.length).to.eq(0);
    });
    cy.then(() => {
      expect(localStorage.getItem('token')).to.be.null;
    });
  });
});
