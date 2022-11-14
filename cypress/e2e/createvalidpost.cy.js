let NAME = "Steffen";

describe("Creates a post if inputs are valid", () => {
  before(() => {
    cy.visit("/");
    cy.login();
  });

  it("Create a post with valid inputs", () => {
    cy.intercept("post&postId=*").as("matchedUrl");
    cy.contains("New Post").click();
    cy.url().should("include", "post");
    cy.get("#postTitle").type("Cypress Title");
    cy.get("#postTags").type("Cypress, tags");
    cy.get("#postMedia").type(
      "https://images.interactives.dk/einstein_shutterstock-qbUmtZmY5FII0w3giBzzOw.jpg?auto=compress&ch=Width%2CDPR&dpr=2.63&h=480&ixjsv=2.2.4&q=38&rect=33%2C0%2C563%2C390"
    );
    cy.get("#postBody").type("THIS IS CYPRESS TALKING");
    cy.contains("Publish").click();
    cy.wait(1000);
    cy.wait("@matchedUrl").then(({ response }) => {
      expect(response.statusCode).to.eq(200);
      expect(response.body.id).to.not.be.undefined;
    });
  });

  it("Create a post with unvalid inputs", () => {
    cy.intercept("post&postId=*").as("matchedUrl");
    cy.contains("New Post").click();
    cy.url().should("include", "post");
    cy.get("#postTitle").type("");
    cy.get("#postTags").type("Cypress, tags");
    cy.get("#postMedia").type(
      "https://images.interactives.dk/einstein_shutterstock-qbUmtZmY5FII0w3giBzzOw.jpg?auto=compress&ch=Width%2CDPR&dpr=2.63&h=480&ixjsv=2.2.4&q=38&rect=33%2C0%2C563%2C390"
    );
    cy.get("#postBody").type("THIS IS CYPRESS TALKING");
    cy.contains("Publish").click();
    cy.wait(1000);
    cy.wait("@matchedUrl").then(({ response }) => {
      expect(response.statusCode).to.eq(200);
      expect(response.body.id).to.not.be.undefined;
    });
  });
});
