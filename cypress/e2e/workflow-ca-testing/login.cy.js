describe("login", () => {
  it("can log in with the login form with valid credentials", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.clearAllLocalStorage();
    cy.get("input#searchInput").type("Noroff{enter}", { delay: 500 });
  });
});
