describe("login testing", () => {
  beforeEach(() => {
    cy.visit("./index.html");
    cy.get("#registerForm").find("button[data-auth=login]").click();
    cy.wait(1000);
    cy.get("#loginForm").should("be.visible");
  });

  const login = (username, password) => {
    cy.get(".modal-content #loginEmail").type(username);
    cy.get("#loginPassword").type(password);
    cy.get("#loginForm #login-button").click();
  };

  // it ("logs in"), () => {
  //   cy.get('#loginEmail').type("steinnes@stud.noroff.no");
  //   cy.get('#loginPassword').type("12345678");
  //   cy.get('#login-button').click();
  //   cy.wait(3000)
  // };

  it("should login successfully with valid credentials", () => {
    login("steinnes@stud.noroff.no", "12345678");
    cy.get("#profile-info").should("be.visible");
    cy.wait(3000);
  });

  it("should show error messages for invalid credentials", () => {
    login("invalid_username", "wrong_password");
    cy.get("#error-message")
      .should("be.visible")
      .should("contain.text", "Invalid username or password");
  });
});
