describe("logout", () => {
  it("can log out with the logout button", () => {
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
    cy.wait(2000);
    cy.get("button[data-auth='logout']:visible").click();
    cy.wait(3000);
    cy.window().its("localStorage.profile").should("not.exist");
    cy.window().its("localStorage.token").should("not.exist");
  });
});
