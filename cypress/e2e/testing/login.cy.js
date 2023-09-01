describe("user authentication", () => {
  beforeEach(() => {
    //clear local store before each test
    cy.clearLocalStorage();
    cy.visit("http://127.0.0.1:5500/");
    cy.wait(1000);
  });

  it("finds register, moves to login, log ins and logs out", () => {
    // check if login button within #registermodal exists
    cy.get(`#registerModal [data-auth="login"]`)
      .contains("Login")
      .should("exist");
    cy.wait(1000);

    // move to #loginForm and click
    cy.get(`#registerModal [data-auth="login"]`).contains("Login").click();

    //check if you're on the login page
    cy.get("#loginForm").contains("Login").should("exist");
    cy.wait(2000);

    // proceed with valid credentials
    cy.get(`#loginForm #loginEmail`)
      .should("be.visible")
      .wait(1000)
      .type("victoria@stud.noroff.no");
    cy.wait(2000);
    cy.get(`#loginForm #loginPassword`)
      .should("be.visible")
      cy.get(`#loginForm #loginPassword`).type("validpass");
    cy.get(`#loginForm [type="submit"]`).contains("Login").click();

    // check if it goes to profile
    cy.url({ timeout: 20000 }).should("include", "profile");

    //checking if there's a div with a class of profile
    cy.get(".profile").should("exist");

    // check if logout works
    cy.get('.btn-outline-warning[data-auth="logout"]').click();
    cy.url().should("not.include", "profile");
  });

  it("displays error message with wrong credentials", () => {
    // go to index
    cy.visit("http://127.0.0.1:5500/");

    // check if the register modal exist
    cy.get("#registerModal .btn").contains("Login").should("exist");
    cy.wait(1000);

    // move to the login modal
    cy.get("#registerModal .btn").contains("Login").click();
    cy.get("#loginForm .btn").contains("Login").should("exist");
    cy.wait(1000);

    // type fake email and fake password and submit
    cy.get("#loginEmail").type("invalid@email.no");
    cy.wait(1000);
    cy.get("#loginPassword").type("invalid");
    cy.get("#loginForm").submit();

    cy.url().should("not.include", "profile");
    cy.wait(2000);

    // check it the alert message exist
    cy.window().get(".alert").should("exist");
  });
});
