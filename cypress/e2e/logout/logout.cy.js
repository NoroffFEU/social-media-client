describe("Login to app with valid credentials", () => {
  const mail = "ustest_432@stud.noroff.no";
  const password = "12345678";

  it("Loads", () => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.get("#registerModal").find("button.btn-close").wait(500).click();
    cy.get("header").find('button[data-auth="login"]').click();
    cy.get("#loginForm").wait(500);
    cy.get("#loginEmail").type(mail, { delay: 200 });
    cy.get("#loginPassword").type(password);
    cy.get("button[type=submit]").contains("Login").wait(200).click();
    cy.wait(500);
    cy.get('button[data-auth="logout"]').wait(500).click();
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
});
