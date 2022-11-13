describe("Login validation", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
  });

  it("will not validate form if provided with input that is not according to API restrictions", () => {
    cy.get("button[data-auth='login']:visible").contains("Login").click();

    //form should not be valid before input

    cy.get("#loginForm").then(
      (form) => expect(form[0].checkValidity()).to.be.false
    );

    cy.get("form input[id='loginEmail']").type("oscar@noff.no", {
      force: true,
    });

    cy.get("form input[id='loginPassword']").type("123", {
      force: true,
    });

    //form should still not be valid when provided with invalid input

    cy.get("#loginForm").then(
      (form) => expect(form[0].checkValidity()).to.be.false
    );

    cy.get('form [class="btn btn-success"]')
      .contains("Login")
      .click({ force: true });
  });

  it("will validate form if provided with input that is according to API restrictions", () => {
    cy.get("button[data-auth='login']:visible").contains("Login").click();

    //form should not be valid before input

    cy.get("#loginForm").then(
      (form) => expect(form[0].checkValidity()).to.be.false
    );

    cy.get("form input[id='loginEmail']").type("oscar@noroff.no", {
      force: true,
    });

    cy.get("form input[id='loginPassword']").type("buttfuck", {
      force: true,
    });

    //form should be valid when provided with valid input

    cy.get("#loginForm").then(
      (form) => expect(form[0].checkValidity()).to.be.true
    );

    cy.get('form [class="btn btn-success"]')
      .contains("Login")
      .click({ force: true });
  });
});
