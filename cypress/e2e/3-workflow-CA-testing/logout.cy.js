describe("testing logout function", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.wait(500);
    cy.get("#registerForm .btn-close").click();
    cy.get(`header button[data-auth="login"]`).click();
    cy.wait(600);
  });
  it("log in with valid credentials and then logout", () => {
    cy.get("#loginForm #loginEmail").type("anny.robinson@noroff.no");
    cy.get("#loginForm #loginPassword").type("anny1234");
    cy.get(`#loginForm button[type="submit"]`).click();
    cy.url()
      .should("include", "/?view=profile")
      .then(() => {
        expect(localStorage.getItem("token")).to.exist;
        expect(localStorage.getItem("profile")).to.exist;
      });
    cy.wait(500);
    cy.get('[data-auth="logout"]')
      .click()
      .then(() => {
        expect(localStorage.getItem("token")).to.not.exist;
        expect(localStorage.getItem("profile")).to.not.exist;
      });
    cy.wait(500);
    cy.get("#registerForm .btn-close").click();
  });
});
