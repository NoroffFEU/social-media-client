describe("it creates a post after logging in", () => {
  it("opens up the site", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.clearLocalStorage();
    cy.get("#registerForm").within(() => {
      cy.get(".btn-close:visible").click();
      cy.wait(500);
    });
    cy.get("button[data-auth='login']:visible").click();
  });

  // Logs in with a registered account's details, posts and deletes
  it("logs in with good credentials", () => {
    cy.get("#loginForm").within(() => {
      cy.wait(500);
      cy.get("input[type='email']:visible")
        .should("exist")
        .type(`thefool@noroff.no`);
      cy.wait(500);
      cy.get("input[type='password']:visible").should("exist").type("password");
      cy.get("button[type='submit']:visible").click();
      cy.wait(2000);
      cy.then(() => expect(localStorage.getItem("token")).to.not.be.null);
      cy.then(() => expect(localStorage.getItem("profile")).to.not.be.null);
      cy.wait(1000);
    });
    // then clicks "new post"
    cy.get("a[href='./?view=post']").click();
    cy.wait(1000);

    // Checks that the url is correct
    cy.url().should("include", "post");
    cy.get("#postForm").within(() => {
      cy.wait(500);
      // Fills in post data
      cy.get("#postTitle").should("exist").type("the title");
      cy.get("#postTags").should("exist").type("cypress");
      cy.get("#postBody").should("exist").type("bottom text");
      cy.get("#postMedia")
        .should("exist")
        .type("https://picsum.photos/200/300?grayscale");
      cy.get("button[data-action='submit']").click({ force: true });
      cy.wait(5000);
      // I have tried to keep this in seperate "it(s)" but it keeps taking
      //away the token and profile so albeit ugly I will keep it this way for now
    });
    cy.get("button[data-action='delete']:visible").click();
  });
});
