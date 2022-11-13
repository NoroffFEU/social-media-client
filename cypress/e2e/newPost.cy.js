/// <reference types="cypress" />

let token;
let profile;

describe(
  "Login to be able to test creating a new post",
  { keystrokeDelay: 50 },
  () => {
    it("Opens a login modal when entering the site", () => {
      cy.visit("http://127.0.0.1:5500");

      cy.wait(500);

      cy.get("#registerForm").within(() => {
        cy.get(".btn-close").click();
      });
    });
    it("Has a button that lets you login", { keystrokeDelay: 50 }, () => {
      //Get login button and click
      cy.get(".text-end").within(() => {
        cy.get(".btn-outline-success").click();
      });

      //Find the email input
      cy.get("#loginForm").within(() => {
        cy.get(".modal-body").within(() => {
          cy.get("#loginEmail").type("kristoffer@stud.noroff.no", { delay: 5 });
        });
      });

      //Find the password input
      cy.get("#loginForm").within(() => {
        cy.get(".modal-body").within(() => {
          cy.get("#loginPassword").type("password", { delay: 50 });
        });
      });

      //Try to login
      cy.get("#loginForm").within(() => {
        cy.get(".modal-footer").within(() => {
          cy.get(".btn-success").click();
        });
      });
      cy.wait(3000);
      cy.then(() => {
        expect(window.localStorage.getItem("token")).to.not.be.null;
        expect(window.localStorage.getItem("profile")).to.not.be.null;
        token = window.localStorage.getItem("token");
        profile = window.localStorage.getItem("profile");
      });
    });
  }
);

describe("Create a new post", () => {
  it("Lets a logged in user create a new post", () => {
    window.localStorage.setItem("token", token);
    window.localStorage.setItem("profile", profile);
    cy.reload();

    cy.get("#footerActions").within(() => {
      cy.get(".btn-outline-success").click();
    });

    cy.wait(500);

    cy.get("#postForm").within(() => {
      cy.get("#postTitle").type("A post title from cypress");
      cy.get("#postTags").type("Cypress, e2e-testing");
      cy.get("#postBody").type(
        "This is some text to test the post function in cypress"
      );
      cy.get(".btn-success").click();
    });

    cy.wait(2000);
    cy.get(".post-actions").within(() => {
      cy.get(".btn-danger").should("exist").first().click();
    });
  });
});
