### Testing added

## Jest

- login.test.js added to test login function with mock fetch and mock localstorage. Looks for token added after succesfull login
- logout.test.js added to test logout function with mock localstorage. Looks for both "profile" and "token" to have been deleted

## Cypress

- login.cy.js added to check login and confirm that you were successfully sent to profile apge
- loginError.cy.js added to check for error handling when invalid login details are given
- loginThenLogut.cy.js added to check if login is working, and after 5 sec, log out
