describe('Logging in without authentication', () => {
  it('denys access with invalid login information', () => {
    cy.visit('./index.html');
    cy.wait(1000);
    cy.get('#registerModal').contains('Login').click();
    cy.wait(2000);
    cy.get("input[type='email']:visible").type('another@email.com', {
      delay: 300,
    });
    cy.get("input[type='password']:visible").type('wrong123', {
      delay: 300,
    });
    cy.get('button[type=submit]').contains('Login').click();
    cy.wait(2000);
  });

  it('denys access with empty login information', () => {
    cy.visit('./index.html');
    cy.wait(1000);
    cy.get('#registerModal').contains('Login').click();
    cy.wait(2000);
    cy.get("input[type='email']:visible", { delay: 500 });
    cy.get("input[type='password']:visible", { delay: 500 });
    cy.get('button[type=submit]').contains('Login').click();
    cy.wait(2000);
  });

  it('denys access with empty email', () => {
    cy.visit('./index.html');
    cy.wait(1000);
    cy.get('#registerModal').contains('Login').click();
    cy.wait(2000);
    cy.get("input[type='email']:visible", { delay: 500 });
    cy.get("input[type='password']:visible").type('wrong123', {
      delay: 500,
    });
    cy.get('button[type=submit]').contains('Login').click();
    cy.wait(2000);
  });

  it('denys access with empty password', () => {
    cy.visit('./index.html');
    cy.wait(1000);
    cy.get('#registerModal').contains('Login').click();
    cy.wait(2000);
    cy.get("input[type='email']:visible").type('another@email.com', {
      delay: 500,
    });
    cy.get("input[type='password']:visible", { delay: 500 });
    cy.get('button[type=submit]').contains('Login').click();
    cy.wait(2000);
  });
});
