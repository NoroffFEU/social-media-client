// Cypress/End-2-end to test if there is possible to login and create an post.

describe('Can login to the page', () => {
  it('login to the start page and create an post', () => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get("#registerForm button[data-auth='login']:visible")
      .contains('Login')
      .click();
    cy.wait(1000);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type('faketestaccount@stud.noroff.no');
    cy.get("input[type='password']:visible")
      .should('exist')
      .type('Fakepassword200');
    cy.wait(1000);
    cy.get("#loginForm button[data-auth='loginButton']:visible").click();
    cy.wait(3000);
    cy.get('#newpost').contains('New Post').click();
    cy.wait(2000);
    cy.get('input[name="title"]:visible').should('exist').type('Hello');
    cy.wait(200);
    cy.get('input[name="tags"]:visible').should('exist').type('Monsters Inc');
    cy.wait(200);
    cy.get('input[name="media"]:visible')
      .should('exist')
      .type(
        'https://images.mubicdn.net/images/film/2845/cache-31330-1562889618/image-w1280.jpg?size=800x'
      );
    cy.wait(200);
    cy.get('textarea[name="body"]:visible')
      .should('exist')
      .type('Successful post with cypress');
    cy.wait(5000);
    cy.get("button[data-action='submit']:visible").click();
  });
});
