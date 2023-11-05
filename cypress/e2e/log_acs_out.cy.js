describe('Login, access profile and logout', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/');
    cy.wait(2000);
    cy.get('#registerForm [data-bs-target="#loginModal"]').should('be.visible').click();
    cy.get('#loginForm').should('be.visible');
    cy.get('#loginEmail').wait(1000).type('guest@noroff.no');
    cy.get('#loginPassword').should('be.visible').type('123456789');
    cy.get('#loginForm .btn.btn-success').should('be.visible').click();
    cy.wait(2000);
  });

  it('should log in successfully', () => {
    cy.window().then(win => {
      const token = win.JSON.parse(localStorage.getItem('token'));
      expect(token).to.exist;
    });
  });

  it('should access and verify the profile', () => {
    cy.url().then(currentUrl => {
      const url = new URL(currentUrl);
      const nameFromUrl = url.searchParams.get('name');

      cy.window().then(win => {
        const token = win.JSON.parse(localStorage.getItem('token'));
        cy.request({
          method: 'GET',
          url: `https://nf-api.onrender.com/api/v1/social/profiles/${nameFromUrl}?&_followers=true&_posts=true&_following=true`,
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(response => {
          const nameFromApi = response.body.name;
          expect(nameFromApi).to.equal(nameFromUrl);
        });
      });
    });
  });

  it('should logout when click the logout button', () => {
    cy.window().then(win => {
      const token = win.JSON.parse(localStorage.getItem('token'));
      expect(token).to.exist;
    });
    cy.get('[data-auth="logout"]').should('be.visible').click();
    cy.window().its('localStorage.token').should('not.exist');
    cy.url().should('eq', 'http://127.0.0.1:8080/');
  });
});
