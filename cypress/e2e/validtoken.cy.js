describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.login();
  });

  it("Token is valid", () => {
    expect(localStorage.getItem("accessToken")).should(
      "match",
      /^[A-Za-z0-9_-]{2,}(?:\.[A-Za-z0-9_-]{2,}){2}$/
    );
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.then(
      () => expect(window.localStorage.getItem("profile")).to.not.be.null
    );
  });
});
