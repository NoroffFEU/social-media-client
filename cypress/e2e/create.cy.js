describe("Create Post", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.wait(3000);
    cy.get("#registerForm")
      .get(".btn-outline-success:visible")
      .contains("Login")
      .click();
    cy.wait(2000);
    cy.get("#loginForm").get("h5").contains("Login");
    cy.wait(2000);
    cy.get("#loginForm").get("input#loginEmail").type("bkalaji33@noroff.no");
    cy.wait(2000);
    cy.get("#loginForm").get("input#loginPassword").type("1234567890");
    cy.wait(2000);
    cy.get("#loginForm").get(".btn-success").contains("Login").click();
    cy.wait(2000);
  });

  it("Can create post", () => {
    cy.url()
      .should("include", "profile")
      .then(() => {
        expect(window.localStorage.getItem("token")).to.not.be.null;
        expect(window.localStorage.getItem("profile")).to.not.be.null;
      });
    cy.wait(2000);
    cy.get(`a[href*="/?view=post"].btn-outline-success`).click();
    cy.get("input#postTitle").should("exist").type("arrogant cypress");
    cy.get("input#postTags").should("exist").type("arrogant cypress");
    cy.get("input#postMedia")
      .should("exist")
      .type(
        "https://user-images.githubusercontent.com/91549377/173154377-068dc451-c2d1-4fb7-9d89-47abcf517048.jpeg"
      );
    cy.get("#postBody")
      .should("exist")
      .type("I'm Cypress test! Say welcome pls :)");
    cy.get(`[data-action="publish"]`).click();
    cy.wait(6000);
  });

  it("Can't create post because of empty inputs", () => {
    cy.url()
      .should("include", "profile")
      .then(() => {
        expect(window.localStorage.getItem("token")).to.not.be.null;
        expect(window.localStorage.getItem("profile")).to.not.be.null;
      });
    cy.wait(2000);
    cy.get(`a[href*="/?view=post"].btn-outline-success`).click();
    cy.get(`[data-action="publish"]`).click();
    cy.wait(6000);
    cy.get(`#postTitle:invalid`)
      .invoke("prop", "validationMessage")
      .should("exist");
    cy.wait(1000);
  });

  it("Can't create post because media is not url", () => {
    cy.url()
      .should("include", "profile")
      .then(() => {
        expect(window.localStorage.getItem("token")).to.not.be.null;
        expect(window.localStorage.getItem("profile")).to.not.be.null;
      });
    cy.wait(2000);
    cy.get(`a[href*="/?view=post"].btn-outline-success`).click();
    cy.get("input#postTitle").should("exist").type("arrogant cypress");
    cy.get("input#postTags").should("exist").type("arrogant cypress");
    cy.get("input#postMedia").should("exist").type("I'm not url :)");
    cy.get("#postBody")
      .should("exist")
      .type("I'm Cypress test! Say welcome pls :)");
    cy.get(`[data-action="publish"]`).click();
    cy.get(`#postMedia:invalid`)
      .invoke("prop", "validationMessage")
      .should("exist");
    cy.wait(1000);
  });
});
