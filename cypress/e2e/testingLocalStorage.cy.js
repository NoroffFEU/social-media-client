describe("login testing", () => {
  beforeEach(() => {
    cy.visit("./index.html");
    cy.wait(1000);
    cy.get("#registerForm").find("button[data-auth=login]").click();
    cy.wait(1000);
    cy.get("#loginForm").should("be.visible");
  });

  const login = (username, password) => {
    cy.get(".modal-content #loginEmail").type(username);
    cy.get("#loginPassword").type(password);
    cy.get("#loginForm button[type=submit]").click();
  };

  it("logs in", () => {
    login("steinnes@stud.noroff.no", "12345678");
    cy.wait(1000);
    cy.get(".profile").should("be.visible");
    cy.wait(1000);

    cy.get(".profile-actions .profile-name").should(
      "contain",
      "steinnesbjornhaavard",
    );

    // Access localStorage and check for user information

    cy.window().then((win) => {
      const user = win.localStorage.getItem("profile");
      expect(user).to.exist;
      const parsedUser = JSON.parse(user);
      expect(parsedUser.username).to.equal(user.name);
    });
  });
});
