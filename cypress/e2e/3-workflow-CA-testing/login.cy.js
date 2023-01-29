describe("testing login function", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.wait(500);
    cy.get("#registerForm .btn-close").click();
    cy.get(`header button[data-auth="login"]`).click();
    cy.wait(600);
  });
  it("can log in with valid credentials", () => {
    cy.get("#loginForm #loginEmail").type("mark.robinson@noroff.no");
    cy.get("#loginForm #loginPassword").type("mark1234");
    cy.get(`#loginForm button[type="submit"]`).click();
    cy.url()
      .should("include", "/?view=profile")
      .then(() => {
        expect(localStorage.getItem("token")).to.exist;
        expect(localStorage.getItem("profile")).to.exist;
      });
    cy.wait(500);
    cy.get(`header button[data-auth="logout"]`).click();
    cy.get("#registerForm .btn-close").click();
  });

  //invalid login

  it("cannot log in with invalid credentials", () => {
    cy.get("#loginForm #loginEmail").type("anny.robinson@gmail.com");
    cy.get("#loginForm #loginPassword").type("12345679");
    cy.get(`#loginForm button[type="submit"]`).click();
    cy.wait(5000);
    cy.on("window:alert", (string) => {
      expect(string).to.equal("Please provide correct username and password");
    });
    cy.get("#loginForm .btn-close").click();
  });
});
