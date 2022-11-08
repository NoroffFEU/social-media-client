describe("Unauthenticated user", () => {
  it("Social-media-app: User can't login with invalid credencials", () => {
    cy.visit("http://127.0.0.1:8080/");
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get('[data-auth="login"]:visible').contains("Login").click();
    cy.wait(1000);
    cy.get('form [id="loginEmail"]').type(
      "Robert@noroff.no",
      { force: true },
      { delay: 500 }
    );
    cy.get('form [id="loginPassword"]').type("robert123", { delay: 100 });
    cy.get('form [class="btn btn-success"]')
      .contains("Login")
      .click({ force: true });
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
});

describe("Authenticated user", () => {
  it("social-media app: User can log in with valid credentials", () => {
    cy.visit("http://127.0.0.1:8080/");
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get('[data-auth="login"]:visible').contains("Login").click();
    cy.wait(1000);
    cy.get('form [id="loginEmail"]').type(
      "Robert@noroff.no",
      { force: true },
      { delay: 100 }
    );
    cy.get('form [id="loginPassword"]').type("robert123", { delay: 100 });
    cy.get('form [class="btn btn-success"]').contains("Login").click();
  });

  it("Social-media-app: User can successfully create and delete a post", () => {
    cy.wait(12000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.get('[id="footerActions"] a').contains("New Post").click();
    cy.get('form [id="postTags"]').type("test,", { delay: 100 });
    cy.get('form [id="postMedia"]').type("https://someimage.jpg");
    cy.get('form [id="postBody"]').type("My amazing test", { delay: 100 });
    cy.get('form button [data-action="publish"]').click();
    cy.wait(1000);
    cy.get('form [id="postTitle"]').type("Test", {
      delay: 100,
    });
    cy.get('form [id="postMedia"]').clear();
    cy.get('form [id="postMedia"]').type(
      "https://picsum.photos/id/7/4728/3168"
    );
    cy.wait(500);
    cy.get('form button [data-action="publish"]').click();
    cy.wait(12000);
    cy.get("button").contains("Delete").click();
    cy.wait(1000);
  });
});

describe("Log's the user out", () => {
  it("Social-media-app: User can successfully log out", () => {
    cy.clearLocalStorage();
    cy.visit("http://127.0.0.1:8080/");
    cy.wait(1000);
    cy.get('[data-auth="login"]:visible').contains("Login").click();
    cy.wait(2000);
    cy.get('form [id="loginEmail"]').type(
      "Robert@noroff.no",
      { force: true },
      { delay: 100 }
    );
    cy.get('form [id="loginPassword"]').type("robert123", { delay: 100 });
    cy.get('form [class="btn btn-success"]')
      .contains("Login")
      .click({ force: true });
    cy.wait(2000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.get("button[data-auth='logout']").click({ force: true });
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
});
