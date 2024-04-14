/**
 * Test suite for user logout functionality.
 * @memberof Cypress
 * @name Test for user logout
 * @inner
 */
describe("Test for user logout", () => {
  /**
   * Setup code to run before each test case.
   * Logs in the user before running each test case.
   * @memberof Test for user logout
   * @name beforeEach
   * @function
   * @inner
   */
  beforeEach(() => {
    cy.intercept("POST", "**/social/auth/login").as("loginRequest");
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(Cypress.env("VALID_USERNAME"), { delay: 50 });
    cy.get("#loginPassword").type(Cypress.env("VALID_PASSWORD"), { delay: 50 });
    cy.contains('button[type="submit"]', "Login").click();
    cy.wait(1000);

    cy.window().then((window) => {
      const authToken =
        window.localStorage.getItem("token") ||
        window.sessionStorage.getItem("token");
      expect(authToken).to.be.a("string");
    });
    cy.wait("@loginRequest").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
    cy.wait(1000);
  });

  /**
   * Test case to verify successful logout.
   * Logs out the user and verifies that the user is redirected to the homepage.
   * @memberof Test for user logout
   * @name Sucsess. Logs out user from website
   * @function
   * @inner
   */
  it("Sucsess. Logs out user from website", () => {
    cy.get('button[data-auth="logout"]').should("be.visible").click();
    cy.wait(1000);

    cy.window().then((window) => {
      const authToken =
        window.localStorage.getItem("token") ||
        window.sessionStorage.getItem("token");
      expect(authToken).to.be.null;
    });
    cy.location("pathname").should("eq", "/");
  });
});
