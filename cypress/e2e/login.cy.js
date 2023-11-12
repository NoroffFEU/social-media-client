describe("User Login Test", () => {
  const userEmail = "jeanett.kestner@stud.noroff.no";
  const userPassword = "Kestner12";

  it("User can log in", () => {
    cy.visit("/index.html");
    showLoginModal();
    loginInput(userEmail, userPassword);
    sendLoginForm();
    cy.wait(2000);
    verifyProfile();
  });

  function showLoginModal() {
    cy.get("#registerModal").contains("Login").click();
    cy.get("#loginForm").should("be.visible");
  }

  function loginInput(email, password) {
    cy.get("#loginEmail").type(email);
    cy.get("#loginPassword").type(password);
  }

  function sendLoginForm() {
    cy.get("button[type=submit]").contains("Login").click();
  }

  function verifyProfile() {
    cy.location("href").should("include", "view=profile&name");
  }
});
