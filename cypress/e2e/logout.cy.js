describe("Logout", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  it("login with valid email and password", () => {
    cy.get(".btn-outline-success:visible").contains("Login").click();
    cy.wait(2000);
    cy.get("#loginForm").get("h5").contains("Login");
    cy.wait(2000);
    cy.get("#loginForm").get("input#loginEmail").type("bkalaji33@noroff.no");
    cy.wait(2000);
    cy.get("#loginForm").get("input#loginPassword").type("1234567890");
    cy.wait(2000);
    cy.get("#loginForm").get(".btn-success").contains("Login").click();
    cy.wait(2000);
    cy.url()
      .should("include", "profile")
      .then(() => {
        expect(window.localStorage.getItem("token")).to.not.be.null;
      });
    cy.wait(2000);
    cy.get("div.text-end").contains("Logout").click();
    cy.get("#registerForm:visible");
  });
});
