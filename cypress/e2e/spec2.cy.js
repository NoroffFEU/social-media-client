describe("Second test", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.login("heihei123@stud.noroff.no", "heihei123");
    cy.logout();
    cy.getLocalStorage("token");
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
  });
});
