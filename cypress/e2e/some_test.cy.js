import { locatorObj } from "../pageLocators/locatorObj";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Validates that the user can login, create a post and then log out", () => {
  it("Checks that the login form do not work with bad inputs based on API restrictions", () => {
    cy.visit("/");
    cy.clearLocalStorage();

    cy.get(locatorObj.getLoginButton, {
      timeout: 5000,
    }).click({ force: true });

    cy.fixture("data.json").then((data) => {
      let badEmail = data.badEmail;
      cy.get(locatorObj.getEmailField, {
        timeout: 5000,
      }).invoke("val", badEmail);
      cy.wait(2000);
    });

    cy.fixture("data.json").then((data) => {
      cy.get(locatorObj.getPasswordField, {
        timeout: 5000,
      }).type(data.password);
      cy.wait(2000);
    });
  });

  it("Checks that the login form validates user inputs correctly based on API restrictions", () => {
    cy.visit("/");
    cy.clearLocalStorage();

    cy.get(locatorObj.getLoginButton, {
      timeout: 5000,
    }).click({ force: true });

    cy.fixture("data.json").then((data) => {
      let myEmail = data.email;
      cy.get(locatorObj.getEmailField, {
        timeout: 5000,
      }).invoke("val", myEmail);
      cy.wait(2000);
    });

    cy.fixture("data.json").then((data) => {
      cy.get(locatorObj.getPasswordField, {
        timeout: 5000,
      }).type(data.password);
      cy.wait(2000);
    });
  });

  it("checks that the create item form validates user inputs correctly based on API restrictions", () => {
    cy.get(locatorObj.getLoginButtonOnModel)
      .contains("Login")
      .click({ force: true });
    cy.get(locatorObj.getCreatepost, {
      timeout: 5000,
    })
      .should("be.visible")
      .click({ force: true });

    cy.fixture("data.json").then((data) => {
      cy.get(locatorObj.getPostTitle, {
        timeout: 5000,
      })
        .should("be.visible")
        .type(data.postTitle);
    });

    cy.fixture("data.json").then((data) => {
      cy.get(locatorObj.getPostTag, {
        timeout: 5000,
      })
        .should("be.visible")
        .type(data.postTag);
    });

    cy.fixture("data.json").then((data) => {
      cy.get(locatorObj.getPostMedia, {
        timeout: 5000,
      })
        .should("be.visible")
        .type(data.postMedia);
    });

    cy.fixture("data.json").then((data) => {
      cy.get(locatorObj.getPostBody, {
        timeout: 5000,
      })
        .should("be.visible")
        .type(data.postBody);
    });

    cy.get(locatorObj.getPublishButton, {
      timeout: 5000,
    })
      .should("be.visible")
      .click({ force: true });
    cy.get(locatorObj.getDeleteButton, {
      timeout: 20000,
    })
      .eq(0)
      .should("be.visible");
  });

  it("checks that logout button logs the user out when clicked", () => {
    cy.wait(3000);
    cy.get(locatorObj.getTopLogoutButton, {
      timeout: 5000,
    })
      .should("be.visible")
      .click({ force: true });
    cy.get(locatorObj.getTopLoginButton, {
      timeout: 5000,
    }).should("be.visible");
    cy.clearLocalStorage();
    cy.visit("/");
  });
});
