describe("social media tests", () => {
  it("Load", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.title().should("contain", "Test Client");
  });

  it("Login Success", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.title().should("contain", "Test Client");
    cy.wait(1000);
    cy.get('button[data-testid="selectLogin"]').should("be.visible").should("not.be.disabled").focus().click("center");
    cy.wait(1000);

    let user = "ylva@stud.noroff.no";
    let pwd = "12345678";

    cy.get('[data-testid="emailInput"]').should("be.visible").focus().type(user);
    cy.get('[data-testid="passwordInput"]').should("be.visible").focus().type(pwd);
    // data-testid="emailInput"

    cy.get('[data-testid="loginSubmit"]').should("be.visible").focus().click("center");
    cy.wait(1000);
    // make sure we now have
    cy.get("div.btn-success.ps-4").should("contain", "YlvaLund").should("be.visible");
    cy.get("h4.profile-name").should("contain", "YlvaLund").should("be.visible");
  });

  it("Login Fail with Notification", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.title().should("contain", "Test Client");
    cy.wait(1000);
    cy.get('button[data-testid="selectLogin"]').should("be.visible").should("not.be.disabled").focus().click("center");
    cy.wait(1000);

    let user = "ylva@gmail.no";
    let pwd = "password";

    cy.get('[data-testid="emailInput"]').should("be.visible").focus().type(user);
    cy.get('[data-testid="passwordInput"]').should("be.visible").focus().type(pwd);
    cy.get("form#loginForm").submit();

    // make sure we now have an error message
    // cy.get("input:invalid").should("have.length", 1);
    // cy.get('[data-testid="emailInput"]').invoke("prop", "validationMessage").should("be.visible");
    cy.on("window:alert", (text) => {
      cy.wrap(text).should("eq", "Either your username was not found or your password is incorrect");
    });
  });

  it("able to logout", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.title().should("contain", "Test Client");
    cy.wait(1000);
    cy.get('button[data-testid="selectLogin"]').should("be.visible").should("not.be.disabled").focus().click("center");
    cy.wait(1000);

    let user = "ylva@stud.noroff.no";
    let pwd = "12345678";

    cy.get('[data-testid="emailInput"]').should("be.visible").focus().type(user);
    cy.get('[data-testid="passwordInput"]').should("be.visible").focus().type(pwd);
    // data-testid="emailInput"

    cy.get('[data-testid="loginSubmit"]').should("be.visible").focus().click("center");
    cy.wait(1000);
    // make sure we now have
    cy.get("div.btn-success.ps-4").should("contain", "YlvaLund").should("be.visible");
    cy.get("h4.profile-name").should("contain", "YlvaLund").should("be.visible");

    // now we need to check the logout button exists
    cy.get('button[data-testid="logoutButton"]').should(".be.visible").focus().click("center");
  });
});
