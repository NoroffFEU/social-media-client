describe("login test", () => {
  it("can login and logout", () => {
    // visit the page
    cy.visit("/");
    cy.wait(5000);

    // check if the register modal exist
    cy.get("#registerModal .btn").contains("Login").should("exist");
    cy.wait(1000);

    // move to the login modal
    cy.get("#registerModal .btn").contains("Login").click();
    cy.get("#loginForm .btn").contains("Login").should("exist");
    cy.wait(1000);

    // type email and password and submit
    cy.get("#loginEmail").type("cor@stud.noroff.no");
    cy.wait(1000);
    cy.get("#loginPassword").type("loginpass");
    cy.get("#loginForm").submit();
    cy.wait(2000);

    // check if it enter to che profile page
    cy.url().should("include", "profile");

    // check if the ures can logout
    cy.get(".btn").contains("Logout").should("exist").click();
    cy.wait(2000);
    cy.url().should("not.include", "profile");
  });

  it("Should fail login with invalid credential and shown a message", () => {
    // visit the login page
    cy.visit("http://127.0.0.1:5500/"); // Replace 3000 with your port number

    // check if the register modal exist
    cy.get("#registerModal .btn").contains("Login").should("exist");
    cy.wait(1000);

    // move to the login modal
    cy.get("#registerModal .btn").contains("Login").click();
    cy.get("#loginForm .btn").contains("Login").should("exist");
    cy.wait(1000);

    // type fake email and fake password and submit
    cy.get("#loginEmail").type("fakeemail@stud.noroff.no");
    cy.wait(1000);
    cy.get("#loginPassword").type("fakepass");
    cy.get("#loginForm").submit();
    cy.wait(2000);
    // check if is stock on the index page
    cy.url().should("not.include", "profile");
    cy.wait(2000);

    // check it the alert message exist
    cy.window().get(".alert").should("exist");
  });
});
