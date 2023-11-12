describe("User Login Validation", () => {
  const userEmail = "jeanett.kestner@stud.noroff.no";
  const userPassword = "Kestner12";
  const wrongEmail = "testing@noroff.no";
  const wrongPassword = "passwordtest12";

  beforeEach(() => {
    cy.visit("/index.html");
    showLoginModal();
  });

  it("show an error for wrong email", () => {
    login(wrongEmail, userPassword);
    displayError("Invalid email or password");
  });

  it("show an error for wrong password", () => {
    login(userEmail, wrongPassword);
    displayError("Invalid email or password");
  });

  it("show an error for wrong email and password", () => {
    login(wrongEmail, wrongPassword);
    displayError("Invalid email or password");
  });

  it("show an error for empty form", () => {
    sendLoginForm();
    cy.wait(2000);
  });

  function showLoginModal() {
    cy.get("#registerModal").contains("Login").click();
  }

  function login(email, password) {
    cy.get("#loginEmail").type(email);
    cy.get("#loginPassword").type(password);
    sendLoginForm();
  }

  function sendLoginForm() {
    cy.get("#loginForm button[type=submit]").contains("Login").click();
  }

  function displayError(message) {
    cy.on("window:alert", (alertMessage) => {
      expect(alertMessage).to.equal(message);
    });
  }
});
