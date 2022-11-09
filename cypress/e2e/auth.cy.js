describe("auth functions", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:8080");
    cy.clearLocalStorage();
  });

  it("logs in a valid user", () => {
    cy.visit("http://127.0.0.1:8080/");
    cy.wait(5000);
    cy.get(".btn-outline-success:visible").contains("Login").click();
    cy.wait(1000);
    cy.get("h5.modal-title").contains("Login");
    cy.get("input#loginEmail").type("kptest1@noroff.no");
    cy.get("input#loginPassword").type("Passord1234*");
    cy.get(".btn-success").contains("Login").click();
    cy.wait(2000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.get(".profile-name").contains("Kp");
    cy.url().should("include", "profile");
  });

  it("gives error if a wrong email format is given", () => {
    cy.visit("http://127.0.0.1:8080/");
    cy.wait(5000);
    cy.get(".btn-outline-success:visible").contains("Login").click();
    cy.wait(1000);
    cy.get("h5.modal-title").contains("Login");
    cy.get("input#loginEmail").type("kptest1@hotmail.no");
    cy.get("input#loginPassword").type("Passord1234*");
    cy.get(".btn-success").contains("Login").click();
    cy.url().should("not.include", "profile");
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });

  it("gives an error if wrong password is given", () => {
    cy.visit("http://127.0.0.1:8080/");
    cy.wait(5000);
    cy.get(".btn-outline-success:visible").contains("Login").click();
    cy.wait(1000);
    cy.get("h5.modal-title").contains("Login");
    cy.get("input#loginEmail").type("kptest1@noroff.no");
    cy.get("input#loginPassword").type("Passor");
    cy.get(".btn-success").contains("Login").click();
    cy.url().should("not.include", "profile");
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });

  it("logs an user out when the logout button is pressed", () => {
    cy.visit("http://127.0.0.1:8080/");
    cy.wait(5000);
    cy.get(".btn-outline-success:visible").contains("Login").click();
    cy.wait(1000);
    cy.get("h5.modal-title").contains("Login");
    cy.get("input#loginEmail").type("kptest1@noroff.no");
    cy.get("input#loginPassword").type("Passord1234*");
    cy.get(".btn-success").contains("Login").click();
    cy.wait(2000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.get(".profile-name").contains("Kp");
    cy.url().should("include", "profile");
    cy.get(".btn-outline-warning").contains("Logout").click();
    cy.wait(500);
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    cy.url().should("not.include", "profile");
  });
});
