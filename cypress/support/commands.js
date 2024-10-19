// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Successful login
Cypress.Commands.add(
    'login',
    (
        email = Cypress.env('userEmail'),
        password = Cypress.env('userPassword')
    ) => {
        cy.intercept(
            'POST',
            `${Cypress.env('API_BASE_URL')}/social/auth/login`,
            {
                statusCode: 200,
                body: {
                    accessToken: 'accessToken',
                    name: 'Test-randomUser',
                },
            }
        ).as('loginRequest');

        cy.intercept(
            'GET',
            // all profiles(/**) or specific profile(/social/profiles/1)
            `${Cypress.env('API_BASE_URL')}/social/profiles/**`,
            {
                statusCode: 200,
                body: {
                    name: 'Test-randomUser',
                    followers: [],
                    following: [],
                    posts: [],
                },
            }
        ).as('getProfile');
        // console elemtents
        // error targeting the correct btn
        cy.get('button').then(($buttons) => {
            cy.log(`Found ${$buttons.length} total buttons on the page`);
            $buttons.each((index, button) => {
                cy.log(
                    `Button ${index}: ${Cypress.$(button).text().trim()} - ${button.outerHTML}`
                );
            });
        });
        // register form
        cy.get('#registerModal').should('be.visible');
        cy.wait(1000);
        cy.get("#registerForm button[data-auth='login']").click();

        // Log in form
        cy.get('#loginModal').should('be.visible');
        cy.wait(1000);

        // credential input
        cy.get('#loginForm #loginEmail').type(email);
        cy.get('#loginForm #loginPassword').type(password);
        cy.wait(1000);

        // submit form
        cy.get("#loginForm button[type='submit'].btn-success").click();

        // wait for login request and save token
        cy.wait('@loginRequest').then((interception) => {
            expect(interception.response.statusCode).to.equal(200);
            const accessToken = interception.response.body.accessToken;
            window.localStorage.setItem('token', accessToken);
        });

        // Verify the url and profile request
        cy.url().should('include', 'profile');
        cy.wait('@getProfile').its('response.statusCode').should('eq', 200);

        // check if token is in localStorage
        cy.window().then((win) => {
            const storedToken = win.localStorage.getItem('token');
            expect(storedToken).to.equal('accessToken');
        });
    }
);

Cypress.Commands.add(
    'loginFail',
    (wrongEmail = 'wrong@noroff.no', wrongPassword = 'wrong_password123') => {
        const apiUrl = Cypress.env('API_BASE_URL');

        // api mock
        cy.intercept('POST', `${apiUrl}/social/auth/login`, {
            statusCode: 401,
            body: {
                error: 'Invalid credentials',
            },
        }).as('failedLoginRequest');

        // register modal
        cy.get('#registerModal').should('be.visible');
        cy.wait(1000);
        cy.get("#registerForm button[data-auth='login']").click();

        // login modal
        cy.get('#loginModal').should('be.visible');
        cy.wait(1000);

        // test fake credentials
        cy.get('#loginForm #loginEmail').type(wrongEmail);
        cy.get('#loginForm #loginPassword').type(wrongPassword);
        cy.wait(1000);

        // submit form
        cy.get("#loginForm button[type='submit'].btn-success").click();
        cy.log('Login form submitted');

        // wait response and alert
        cy.wait('@failedLoginRequest', { timeout: 1000 }).then(
            (interception) => {
                if (interception) {
                    cy.log('Intercepted failed login request');
                    expect(interception.response.statusCode).to.equal(401);

                    //    alert modal
                    cy.window().then((win) => {
                        const alertElement = win.document.createElement('div');
                        alertElement.id = 'cypress-alert';
                        alertElement.style.position = 'fixed';
                        alertElement.style.top = '20px';
                        alertElement.style.left = '50%';
                        alertElement.style.transform = 'translateX(-50%)';
                        alertElement.style.backgroundColor = 'red';
                        alertElement.style.color = 'white';
                        alertElement.style.padding = '10px';
                        alertElement.style.borderRadius = '5px';
                        alertElement.style.zIndex = '9999';
                        alertElement.textContent =
                            'Login failed: Invalid credentials\nPlease try again';
                        win.document.body.appendChild(alertElement);

                        setTimeout(() => {
                            alertElement.remove();
                        }, 5000);
                    });
                } else {
                    throw new Error('Failed login request was not intercepted');
                }
            }
            // sshould modal be visible again  ?
        );
    }
);

//
// Successful logout
Cypress.Commands.add('logout', () => {
    // get the logout button / element/
    cy.url().should('include', 'profile');

    // click on logout btn
    cy.get('button[data-auth="logout"]').click();
    cy.wait(1000);
    cy.window().its('localStorage.token').should('be.undefined');
    // make sure the user is redirected to the login page
    cy.get('#registerModal').should('be.visible');
    cy.wait(1000);
});
