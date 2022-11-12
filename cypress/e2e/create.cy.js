describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.visit('/');
    cy.wait(1000);
    cy.get('.btn-close:visible').click({ multiple: true });

    cy.wait(1200);
    cy.get("button[data-auth='login']:visible")
      .contains('Login')
      .click({ multiple: true });

    cy.wait(2000);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type('cocomarcia@noroff.no');
    cy.get("input[type='password']:visible")
      .should('exist')
      .type('cocomarcia1');
    cy.get('.btn-success:visible').click({ multiple: true });

    cy.wait(3500);
    cy.visit('/');
  });

  it(' create item form that validate', () => {
    cy.wait(800);
    cy.visit('/?view=post');
    cy.get('#footerActions > a.btn')
      .contains('New Post')
      .should('be.visible')
      .click({ force: true });
    cy.get("form#postForm  input[name='title']")
      .should('be.visible')
      .type('Cypress testing')
      .should('have.value', 'Cypress testing');
    cy.get("form#postForm   input[name='tags']")
      .should('be.visible')
      .type('cypress');
    cy.get("form#postForm input[name='media']")
      .should('be.visible')
      .type('https://picsum.photos/id/237/200/300');

    cy.get("form#postForm textarea[name ='body']")
      .should('be.visible')
      .type('Test cypress');
    cy.get('form#postForm > div.col-12 > button.btn-success')
      .should('be.visible')
      .click({ multiple: true });
  });
});
