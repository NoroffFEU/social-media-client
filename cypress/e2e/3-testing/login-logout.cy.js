const user = {
  email: "lhvk@stud.noroff.no",
  password: "abcd1234",
};

// SUCCESSFUL LOGIN

describe("Login test for the CA", () => {
  it("logs in the user successfully", () => {
    cy.visit("/");
    cy.intercept(
      "POST",
      "https://nf-api.onrender.com/api/v1/social/auth/login"
    ).as("authorized");
    cy.wait(1000);
    cy.get("#registerForm > div.modal-footer > button")
      .contains("Login")
      .click();
    cy.wait(1000);
    cy.get("input#loginEmail")
      .type(user.email)
      .should("have.value", user.email);
    cy.wait(1000);
    cy.get("input#loginPassword")
      .type(`${user.password}{enter}`)
      .wait("@authorized")
      .its("response.statusCode")
      .should("be.within", 200, 299);
    cy.wait(2000);
  });
});

// SUCCESSFUL LOGOUT

describe("Logout test for the CA", () => {
  it("logs out the user (requires the user to be logged in)", () => {
    cy.get("header").get("button").contains("Logout").click();
  });
});

// UNSUCCESSFUL LOGIN

describe("Unsuccessful login test for the CA", () => {
  it("does not log in the user successfully", () => {
    cy.intercept(
      "POST",
      "https://nf-api.onrender.com/api/v1/social/auth/login"
    ).as("unauthorized");
    cy.wait(1000);
    cy.get("#registerForm > div.modal-footer > button")
      .contains("Login")
      .click();
    cy.wait(1000);
    cy.get("input#loginEmail")
      .type(user.email)
      .should("have.value", user.email);
    cy.wait(1000);
    cy.get("input#loginPassword").type(`${user.password}{enter}`);
    cy.wait("@unauthorized")
      .its("response.statusCode")
      .should("be.within", 400, 499);
    cy.log("Invalid credentials");
  });
});
