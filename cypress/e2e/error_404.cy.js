describe('Checks 404 errors', () => {
  it('Lists any 404 errors', () => {
    cy.visit('http://127.0.0.1:5500/');

    cy.wait(1000);

    cy.get('a').each((link) => {
      const href = link.attr('href');

      if (href && !href.startsWith('#')) {
        cy.request(href).then((response) => {
          if (response.status === 404) {
            cy.log(`404 Error found: ${href}`);
          }
        })
      }
    })
  });
});