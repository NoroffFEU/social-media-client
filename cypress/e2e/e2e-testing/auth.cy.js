describe("authentication process", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:8080");
    cy.clearLocalStorage();
  });

  it("successfully logs in a user with correct credentials", () => {
    cy.visit("http://127.0.0.1:8080/");
    cy.wait(5000);
    cy.get(".btn-outline-success:visible").contains("Login").click();
    cy.wait(1000);
    cy.get("h5.modal-title").contains("Login");
    cy.get("input#loginEmail").type("john.doe@noroff.no");
    cy.get("input#loginPassword").type("SecurePassword123!");
    cy.get(".btn-success").contains("Login").click();
    cy.wait(2000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.get(".profile-name").contains("John");
    cy.url().should("include", "profile");
  });

  it("shows an error when using an invalid email format", () => {
    cy.visit("http://127.0.0.1:8080/");
    cy.wait(5000);
    cy.get(".btn-outline-success:visible").contains("Login").click();
    cy.wait(1000);
    cy.get("h5.modal-title").contains("Login");
    cy.get("input#loginEmail").type("invalid_email@example");
    cy.get("input#loginPassword").type("SecurePassword123!");
    cy.get(".btn-success").contains("Login").click();
    cy.url().should("not.include", "profile");
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });

  it("displays an error when entering an incorrect password", () => {
    cy.visit("http://127.0.0.1:8080/");
    cy.wait(5000);
    cy.get(".btn-outline-success:visible").contains("Login").click();
    cy.wait(1000);
    cy.get("h5.modal-title").contains("Login");
    cy.get("input#loginEmail").type("john.doe@noroff.no");
    cy.get("input#loginPassword").type("WrongPassword123!");
    cy.get(".btn-success").contains("Login").click();
    cy.url().should("not.include", "profile");
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });

  it("logs a user out after clicking the logout button", () => {
    cy.visit("http://127.0.0.1:8080/");
    cy.wait(5000);
    cy.get(".btn-outline-success:visible").contains("Login").click();
    cy.wait(1000);
    cy.get("h5.modal-title").contains("Login");
    cy.get("input#loginEmail").type("john.doe@noroff.no");
    cy.get("input#loginPassword").type("SecurePassword123!");
    cy.get(".btn-success").contains("Login").click();
    cy.wait(2000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.get(".profile-name").contains("John");
    cy.url().should("include", "profile");
    cy.get(".btn-outline-warning").contains("Logout").click();
    cy.wait(500);
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    cy.url().should("not.include", "profile");
  });
});
