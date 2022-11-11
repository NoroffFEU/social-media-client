describe("Unit testing", () => {
  let email = "rotta@noroff.no";
  let password = "rotta123";

  it("Returnes valid token when provided with valid credentials ", () => {
    cy.visit("/");
    cy.login(email, password);
    cy.getLocalStorage("token");
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
  });
});
