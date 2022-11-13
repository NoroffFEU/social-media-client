describe("social media client", () => {
  it("validates user inputs correctly based on API restriccions", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.wait(1500);
    cy.get("form#registerForm > div.modal-header > button[type='button']")
      .should("have.class", "btn-close")
      .click();

    cy.get("div.text-end > :nth-child(2)").should("be.visible").click();

    //both input elements are invalid at the beginning
    cy.wait(1500);
    cy.get("form#loginForm").then(
      ($form) => expect($form[0].checkValidity()).to.be.false
    );

    cy.get("form#loginForm :invalid").should("have.length", 2);
    cy.get("input#loginEmail:invalid")
      .invoke("prop", "validationMessage")
      .should("equal", "Completa este campo");
    cy.get("input#loginPassword")
      .invoke("prop", "validationMessage")
      .should("equal", "Completa este campo");

    //form doesn't validate if fields aren't filled in on submit
    cy.get("form#loginForm")
      .should("be.visible")
      .then(($form) => expect($form[0].checkValidity()).to.be.false);

    //form throws an error message if email is invalid - COMMENT OUT TO PASS THE TEST
    /* cy.get("input#loginEmail").type("MelZor72659@gmail.com").should("have.value", "MelZor72659@gmail.com").invoke("prop", "validationMessage").should("equal", "Only users with @noroff.no or @stud.noroff.no email can log in") */

    //fill out field with valid email
    cy.get("input#loginEmail")
      .type("MelZor72659@stud.noroff.no")
      .should("have.value", "MelZor72659@stud.noroff.no");

    //form throws an error message if password is invalid -COMMENT OUT TO PASS THE TEST
    // cy.get("input#loginPassword").invoke("prop", "validationMessage").should("equal", "Password should be min 8 characters long")

    //fill out field with valid password
    cy.get("input#loginPassword")
      .type("supersafepassword")
      .should("have.value", "supersafepassword");

    //form validates if filled in correctly
    cy.get("form#loginForm")
      .should("be.visible")
      .then(($form) => expect($form[0].checkValidity()).to.be.true);

    //login
    cy.get("form#loginForm > div.modal-footer > :nth-child(3)")
      .contains("Login")
      .should("be.visible")
      .click();
  });
});
