/* eslint-disable */
describe("test the login verification", () => {
  it("can login as valid user", () => {
    const speed = 100;

    // user
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
    // logOut from pages
    cy.wait(10000);
    cy.get(".btn-outline-warning").click({ force: true });
    cy.wait(1000);
    cy.get(".text-end > .btn-outline-success").click({ force: true });
  });
});
