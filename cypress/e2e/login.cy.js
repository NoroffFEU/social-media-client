const name = "oBraenna91";
const mail = "OleBra17268@stud.noroff.no";
const password = "1234abcd";

describe("LogIn", () => {
  it("Can log in with the login form with valid credentials", () => {
    cy.wait(1000);
    cy.visit("/");
    cy.get("#registerModal button")
      .contains("Login")
      .should("be.visible")
      .wait(1000)
      .click()
      .wait(1000);
    cy.get(`input#loginEmail[name="email"]`).type(mail);
    cy.get(`input#loginPassword[name="password"]`).type(password);
    cy.get(`button[type="submit"]`).contains("Login").click();
    cy.wait(2000);
    cy.get(`button[type="button"][data-visible="loggedIn"]`)
      //.contains("Logout")
      //.click();
  });
});