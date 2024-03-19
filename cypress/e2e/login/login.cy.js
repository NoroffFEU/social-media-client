describe("Login to app with valid credentials", () => {
  const mail = "ustest_432@stud.noroff.no";
  const password = "12345678";

  it("Loads", () => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.get("#registerModal").find("button.btn-close").wait(500).click();
    cy.get("header").find('button[data-auth="login"]').click();
    cy.get("#loginForm").wait(500);
    cy.get("#loginEmail").type(mail, { delay: 200 });
    cy.get("#loginPassword").type(password);
    cy.get("button[type=submit]").contains("Login").wait(200).click();
    cy.wait(500);
    cy.url().should("include", "profile");
  });
});

describe("Login to app with invalid credentials", () => {
  const mail = "ustest_4321@noroff.no";
  const password = "12345678";

  it("Cannot login", () => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.get("#registerModal").find("button.btn-close").wait(500).click();
    cy.get("header").find('button[data-auth="login"]').click();
    cy.get("#loginForm").wait(500);
    cy.get("#loginEmail").type(mail, { delay: 200 });
    cy.get("#loginPassword").type(password);
    cy.get("button[type=submit]").contains("Login").wait(200).click();
    const alertShown = cy.stub().as("alertShown");
    cy.on("window:alert", alertShown);
    cy.get("@alertShown").should(
      "have.been.calledOnceWith",
      "Either your username was not found or your password is incorrect",
    );
    cy.url().should("include", "profile");
  });
});

describe("Login to app with other than noroff mail", () => {
  const mail = "ustest_432@test.no";
  const password = "12345678";

  it("Cannot login", () => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.get("#registerModal").find("button.btn-close").wait(500).click();
    cy.get("header").find('button[data-auth="login"]').click();
    cy.get("#loginForm").wait(500);
    cy.get("#loginEmail").type(mail, { delay: 200 });
    cy.get("#loginPassword").type(password);
    cy.get("button[type=submit]").contains("Login").wait(200).click();
    cy.wait(500);
    cy.url().should("include", "profile");
  });
});
