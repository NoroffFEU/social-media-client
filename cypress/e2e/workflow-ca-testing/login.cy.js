describe("login", () => {
  it("can log in with the login form with valid credentials", () => {
    cy.visit("index.html");
    cy.clearAllLocalStorage();

    cy.wait(2000);
    cy.get("button[data-bs-target='#loginModal']:visible").click();
    cy.wait(2000);
    cy.get("#loginModal #loginEmail")
      .should("exist")
      .type("charlie123@noroff.no");
    cy.get("#loginModal #loginPassword").should("exist").type("charlie12345");
    cy.get("button[type='submit']:visible").click();
    cy.get(window.localStorage.getItem("profile")).should("not.be.empty");
    cy.get(window.localStorage.getItem("token")).should("not.be.empty");
  });

  it("cannot submit the login form with invalid email credentials and is shown a message.", () => {
    cy.visit("index.html");
    cy.clearAllLocalStorage();

    cy.wait(2000);
    cy.get("button[data-bs-target='#loginModal']:visible").click();
    cy.wait(2000);
    cy.get("#loginModal #loginEmail")
      .should("exist")
      .type("charlie123@gmail.no");
    cy.get("#loginModal #loginPassword").should("exist").type("12345");
    cy.get("button[type='submit']:visible").click();
    cy.wait(3000);
    cy.window().its("localStorage.profile").should("not.exist");
    cy.window().its("localStorage.token").should("not.exist");
  });

  it("cannot submit the login form with invalid password and is shown a message.", () => {
    cy.visit("index.html");
    cy.clearAllLocalStorage();

    cy.wait(2000);
    cy.get("button[data-bs-target='#loginModal']:visible").click();
    cy.wait(2000);
    cy.get("#loginModal #loginEmail")
      .should("exist")
      .type("charlie123@noroff.no");
    cy.get("#loginModal #loginPassword").should("exist").type("12345");
    cy.get("button[type='submit']:visible").click();
    cy.wait(4000);
    cy.window().its("localStorage.profile").should("not.exist");
    cy.window().its("localStorage.token").should("not.exist");
  });
});
