it('can make a new post', () => {
  cy.visit('https://nf-api.onrender.com/api/v1/social/posts/');
  cy.visit('/?view=post');
  cy.get('#postForm')
    .should('exist')
    .within(() => {
      cy.get("input[name='title']")
        .should('exist')
        .type(`title example with cypress test`);
      cy.get("input[name='tags']")
        .should('exist')
        .type(`tag example with cypress test`);
      cy.get("input[name='media']")
        .should('exist')
        .type(
          ` 'https://www.dreamstime.com/stock-photo-blue-corns-close-up-some-image34319130'/`
        );
      cy
        .get('#postBody')
        .should('exist')
        .type(`body example with cypress test`),
        { delay: 200 };
      cy.get("button[data-action='submit']").should('exist').click();
    });
  cy.wait(2000);
});
