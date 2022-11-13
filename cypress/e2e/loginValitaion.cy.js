/// <reference types="cypress" />

describe(
  "Validating user input to login form || Valid credentials",
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
          cy.get("#loginEmail").type("kristoffer@stud.noroff.no", { delay: 6 });
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
      });
    });
  }
);
describe(
  "Validating user input to login form || Invalid credentials",
  { keystrokeDelay: 50 },
  () => {
    //I know this doesn't actually check if the form validates the input but rather if the api validates the input but i could not find and code that actually validates the input so i'm not sure how i would test it
    it("Opens a login modal when entering the site", () => {
      cy.clearLocalStorage();
      cy.visit("http://127.0.0.1:5500");

      cy.wait(500);

      cy.get("#registerForm").within(() => {
        cy.get(".btn-close").click();
      });
    });
    it(
      "Doesn't store a token when provided with invalid credentials",
      { keystrokeDelay: 50 },
      () => {
        //Get login button and click
        cy.get(".text-end").within(() => {
          cy.get(".btn-outline-success").click();
        });

        //Find the email input
        cy.get("#loginForm").within(() => {
          cy.get(".modal-body").within(() => {
            cy.get("#loginEmail").type("kristoffer@stud.", { delay: 6 });
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
          expect(window.localStorage.getItem("token")).to.be.null;
          expect(window.localStorage.getItem("profile")).to.be.null;
        });
      }
    );
  }
);
