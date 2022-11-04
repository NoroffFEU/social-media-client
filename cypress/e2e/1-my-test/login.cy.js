/*eslint-disable */
const speed = 400;

describe("value token", () => {
  it("login as valid user", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.get("button.btn.btn-outline-success").last().click({ delay: speed });
    cy.get("input#loginEmail").type(
      "albertt@noroff.no",
      { force: true },
      { delay: speed }
    );
    cy.get("input#loginPassword").type(
      "albertalbert{enter}",
      { force: true },
      { delay: speed }
    );
  });
});
