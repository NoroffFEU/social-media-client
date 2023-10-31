describe('The user cannot submit the login form when invalid credentials and is shown a message', () => {
  it('can not submit when invalid credentials', () => {
    const failEmail = `fail@noroff.no`;
    const failPassword = `failPassword`;
    const expectedEmail = `guest@noroff.no`;
    const expectedPassword = `123456789`;

    cy.intercept(
      {
        method: 'POST',
        url: `https://nf-api.onrender.com/api/v1/social/auth/login`
      },
      request => {
        const userEmail = request.body.email;
        const userPassword = request.body.password;

        const isEmpty = !userEmail || !userPassword;
        const isInvalid = userEmail !== expectedEmail || userPassword !== expectedPassword;

        if (isEmpty || isInvalid) {
          request.reply({
            statusCode: 401,
            body: {
              error: 'Invalid credentials'
            }
          });
        } else {
          request.reply({
            statusCode: 200,
            body: {
              token: 'sampleToken1234'
            }
          });
        }
      }
    );

    cy.visit('http://127.0.0.1:8080/');
    cy.wait(2000);

    cy.get('#registerForm [data-bs-target="#loginModal"]').should('be.visible').click();
    cy.get('#loginForm').should('be.visible');

    cy.on('window:alert', str => {
      expect(str).to.equal('Either your username was not found or your password is incorrect');
    });

    cy.get('#loginEmail').wait(1000).should('have.attr', 'title', 'Only Noroff student or teacher emails are valid.').and('be.visible').type(failEmail);
    cy.get('#loginPassword').should('be.visible').type(failPassword);
    cy.get('#loginForm .btn.btn-success').should('be.visible').click();
  });
});
