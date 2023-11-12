// describe('no.wikipedia.org', () => {
//   it('can search for Noroff', () => {
//     cy.visit('https://no.wikipedia.org');
//     cy.get('input#searchInput').type('Noroff{enter}', { delay: 5000 });
//     cy.get('h1').contains('Noroff');
//   });
// });

describe('noroff login', () => {
  it('can log in and visit profile page', () => {
    cy.visit('https://chrisbekk.github.io/social-media-client/');
    cy.get('#login-button');
  });
});
