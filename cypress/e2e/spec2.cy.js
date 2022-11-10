describe("Logout", () => {
  let email = "heihei123@stud.noroff.no";
  let password = "heihei123";

  it("Logging out", () => {
    cy.visit("/");
    cy.login(email, password);
    cy.logout();
    cy.getLocalStorage("token").then((token) => {
      expect(token).to.be.null;
    });
  });
});
