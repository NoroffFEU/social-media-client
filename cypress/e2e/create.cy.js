describe("Create post form", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.get("button[data-auth='login']:visible").contains("Login").click();
    cy.get("form input[id='loginEmail']").type("oscar@noroff.no", {
      force: true,
    });
    cy.get("form input[id='loginPassword']").type("buttfuck", {
      force: true,
    });
    cy.get('form [class="btn btn-success"]')
      .contains("Login")
      .click({ force: true })
      .wait(1000)
      .then(() => {
        cy.get('footer a[class="btn btn-outline-success"]')
          .contains("New Post")
          .click({ force: true });
      });
  });

  it("will validate and allow a post to be created if provided with a title", () => {
    cy.get("#postTitle").type("Cypress Hill");

    cy.get("#postForm").then(
      (form) => expect(form[0].checkValidity()).to.be.true
    );
  });

  it("will not validate and allow a post to be created if not provided with a title", () => {
    cy.get("#postTags").type("cypress, hill");

    cy.get("#postBody").type(
      `This pig harassed the whole neighborhood
        Well this pig worked at the station
        This pig he killed my Homeboy
        So the fuckin' pig went on a vacation`
    );

    cy.get("#postMedia").type(
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/0027fb29193693.55e6ea1cd8758.jpg"
    );

    cy.get("#postForm").then(
      (form) => expect(form[0].checkValidity()).to.be.false
    );
  });

  it("will not validate and allow a post to be created if an invalid url is provided", () => {
    cy.get("#postTitle").type("Cypress Hill");

    cy.get("#postTags").type("cypress, hill");

    cy.get("#postBody").type(
      `This pig harassed the whole neighborhood
        Well this pig worked at the station
        This pig he killed my Homeboy
        So the fuckin' pig went on a vacation`
    );

    cy.get("#postMedia").type("misspiggy");

    cy.get("#postForm").then(
      (form) => expect(form[0].checkValidity()).to.be.false
    );
  });
});
