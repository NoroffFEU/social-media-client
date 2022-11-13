describe("Logout", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
  });

  it("will log out the user when the logout button is clicked", () => {
    cy.get("button[data-auth='login']:visible").contains("Login").click();

    cy.get("form input[id='loginEmail']").type("oscar@noroff.no", {
      force: true,
    });

    cy.get("form input[id='loginPassword']").type("buttfuck", {
      force: true,
    });

    cy.get('form [class="btn btn-success"]')
      .contains("Login")
      .click({ force: true });

    cy.wait(1000).then(() => {
      expect(localStorage.getItem("token")).not.null;
    });

    cy.get("button[data-auth='logout']:visible").contains("Logout").click();

    cy.wait(1000).then(() => {
      expect(localStorage.getItem("token")).to.be.null;
    });
  });
});
