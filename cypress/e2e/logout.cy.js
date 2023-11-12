describe("User Logout Test", () => {
  const userEmail = "jeanett.kestner@stud.noroff.no";
  const userPassword = "Kestner12";

  it("User can log out", () => {
    cy.visit("/index.html");
    showLoginModal();
    login(userEmail, userPassword);
    sendLoginForm();
    logout();
    checkIfLoggedOut();
  });

  function showLoginModal() {
    cy.get("#registerModal").contains("Login").click();
    cy.get("#loginForm").should("be.visible");
  }

  function login(email, password) {
    cy.get("#loginEmail").type(email);
    cy.get("#loginPassword").type(password);
  }

  function sendLoginForm() {
    cy.get("button[type=submit]").contains("Login").click();
  }

  function logout() {
    cy.get("header button[type=button]").contains("Logout").click();
  }

  function checkIfLoggedOut() {
    cy.clearLocalStorage();
    cy.window().its("localStorage").should("be.empty");
  }
});
