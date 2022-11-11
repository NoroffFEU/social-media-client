const speed = 300;
describe("login user", () => {
  it("can search for Noroff", () => {
    cy.visit("http://127.0.0.1:5501/");
    cy.wait(500);
    cy.get("#registerForm > .modal-footer > .btn-outline-success").click();
    cy.wait(500);
    cy.get("#loginEmail").type("Samzay78936@stud.noroff.no", {
      delay: speed,
    });
    cy.wait(500);
    cy.get("#loginPassword").type("samah1234{enter}", {
      delay: speed,
    });
    cy.wait(500);
  });
});
