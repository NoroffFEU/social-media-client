const speed = 100;
describe("login user", () => {
  it("can search for Noroff", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.wait(500);
    cy.get("#registerForm > .modal-footer > .btn-outline-success").click();
    cy.wait(500);
    cy.get("#loginEmail").type("SheHas77920@stud.noroff.no", {
      delay: speed,
    });
    cy.wait(500);
    cy.get("#loginPassword").type("Sherzad2428{enter}", {
      delay: speed,
    });
    cy.wait(500);
  });
});
