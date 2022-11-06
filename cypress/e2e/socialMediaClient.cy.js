describe("social media app", () => {
  it("the login form validates user inputs correctly based on API restrictions", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.wait(1500);
    cy.get("form#registerForm > div.modal-header > button[type='button']")
      .should("have.class", "btn-close")
      .click();

    cy.get("div.text-end > :nth-child(2)").should("be.visible").click();

    cy.wait(1500);
    cy.get(
      "form#loginForm > div.modal-body > :nth-child(1) > input[type='email']"
    )
      .should("be.visible")
      .type("MelZor72659@stud.noroff.no")
      .should("have.value", "MelZor72659@stud.noroff.no");

    cy.get(
      "form#loginForm > div.modal-body > :nth-child(2) > input[type='password']"
    )
      .should("be.visible")
      .type("supersafepassword")
      .should("have.value", "supersafepassword");

    cy.get("form#loginForm > div.modal-footer > :nth-child(3)")
      .contains("Login")
      .should("be.visible")
      .click();
  });

  it("the create item form validates user inputs correctly based on API restrictions", () => {
    cy.wait(1500);
    cy.get(
      "footer > div.container-fluid > div.row > :nth-child(2) > div#footerActions > :nth-child(2)"
    )
      .contains("New Post")
      .should("be.visible")
      .click();

    cy.get("form#postForm > :nth-child(2) > :nth-child(1) > input[type='text']")
      .should("be.visible")
      .type("bot generated post")
      .should("have.value", "bot generated post");

    cy.get("form#postForm > :nth-child(2) > :nth-child(2) > input[type='text']")
      .should("be.visible")
      .type("cypress");

    cy.get("form#postForm > :nth-child(2) > :nth-child(3) > input[type='url']")
      .should("be.visible")
      .type("https://picsum.photos/100");

    cy.get("form#postForm > :nth-child(2) > :nth-child(4) > textarea")
      .should("be.visible")
      .type("This post was generated using cypress test tool");

    cy.get("form#postForm > :nth-child(1) > button")
      .should("be.visible")
      .click();
  });

  it("The logout button logs the user out when clicked", () => {
    cy.get(
      "header > div.container-fluid > div.d-flex > div.text-end > :nth-child(1)"
    )
      .should("have.class", "btn-outline-warning")
      .should("be.visible")
      .click();
  });
});
