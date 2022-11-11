describe("Unit testing 2,", () => {
  let email = "rotta@noroff.no";
  let password = "rotta123";

  it("Returnes valid token when provided with valid credentials ", () => {
    cy.visit("/");
    cy.login(email, password);
    cy.getLocalStorage("token");
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
  });

  it("Clears the token form browser storage ", () => {
    cy.logout();
    cy.removeLocalStorage("token");
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
});
