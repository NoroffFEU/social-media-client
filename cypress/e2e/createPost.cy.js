describe("Create Post", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerForm").within(() => {
      cy.get(".btn-close:visible").click();
      cy.wait(500);
    });
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(500);
    cy.get("#loginForm").within(() => {
      cy.get("input[type='email']:visible")
        .should("exist")
        .type(Cypress.env("EMAIL"));
      cy.get("input[type='password']:visible")
        .should("exist")
        .type(Cypress.env("PASSWORD"));
      cy.get("button[type='submit']").click();
    });
    //added more wait occasional error
    cy.wait(3000);
    cy.get('a[href="./?view=post"]').click();
    cy.wait(2000);
  });

  it("Can create a post", () => {
    cy.url().should("include", "post");
    cy.get("#postTitle").should("exist").type("Cypress Testing Posts");
    cy.get("#postTags").should("exist").type("Cypress, Testing, End To End");
    cy.get("#postMedia")
      .should("exist")
      .type(
        "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      );
    cy.get("#postBody").should("exist").type(
      //combined validation tests to decrease the chances of a problem with slow server responses.
      "This post has been generated using Cypress, automate your user testing today!"
    );
    cy.get('button[data-action="submit"]').click();
    //posting could be very slow to respond in cypress
    cy.wait(5000);
    cy.url().should("include", "view=post&postId=");
    cy.wait(500);
    cy.get('button[data-action="delete"]:visible').click();
    cy.wait(1000);
    cy.url().should("include", "/");
  });

  it("Can validate inputs, require inputs and return validation messages", () => {
    // used should exist for popup invalid messages as the messages can vary.
    cy.url().should("include", "post");
    // empty form
    cy.get('button[data-action="submit"]').click();
    cy.wait(1000);
    cy.url().should("not.include", "postId");
    //checking for prompt was always true even if the input was invalid or not
    cy.get("#postTitle").should("have.focus");
    cy.get("#postTitle:invalid").should("exist");
    cy.wait(200);
    // not a url
    cy.get("#postTitle").should("exist").type("Cypress Testing Posts");
    cy.get("#postMedia").should("exist").type("Not a URL");
    cy.get('button[data-action="submit"]').click();
    cy.wait(1000);
    cy.url().should("not.include", "postId");
    //checking for prompt was always true even if the input was invalid or not
    cy.get("#postMedia").should("have.focus");
    cy.get("#postMedia:invalid").should("exist");
    cy.wait(200);
    // post needs a title
    cy.get("#postTitle").should("exist").clear();
    cy.get("#postMedia").should("exist").clear();
    cy.get("#postTags").should("exist").type("Cypress, Testing, End To End");
    cy.get("#postMedia")
      .should("exist")
      .type(
        "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      );
    cy.get("#postBody")
      .should("exist")
      .type(
        "This post has been generated using Cypress, automate your user testing today!"
      );
    cy.get('button[data-action="submit"]').click();
    cy.wait(1000);
    cy.url().should("not.include", "postId");
    //checking for prompt was always true even if the input was invalid or not
    cy.get("#postTitle").should("have.focus");
    cy.get("#postTitle:invalid").should("exist");
    cy.wait(500);
  });

  it("Handles thrown errors", () => {
    cy.url().should("include", "post");
    cy.get("#postTitle").should("exist").type("Cypress Testing Posts");
    //generate unauthorized error
    cy.clearLocalStorage();
    cy.get('button[data-action="submit"]').click();
    cy.wait(2000);
    //If unathorized should redirect to homepage for login? or display login form?
    cy.url().should("not.include", "post");
  });
});
