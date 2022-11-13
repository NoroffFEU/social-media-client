describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  it("login with valid email and password", () => {
    cy.visit("/");
    cy.wait(2000);
    cy.get(".btn-outline-success:visible").contains("Login").click();
    cy.wait(2000);
    cy.get("#loginForm").get("h5").contains("Login");
    cy.wait(2000);
    cy.get("#loginForm").get("input#loginEmail").type("bkalaji33@noroff.no");
    cy.get("#loginForm").get("input#loginPassword").type("1234567890");
    cy.get("#loginForm").get(".btn-success").contains("Login").click();
    cy.wait(4000);
    cy.url()
      .should("include", "profile")
      .then(() => {
        expect(window.localStorage.getItem("token")).to.not.be.null;
        expect(window.localStorage.getItem("profile")).to.not.be.null;
      });
  });

  it("Can't login with empty input", () => {
    cy.visit("/");
    cy.wait(6000);
    cy.get(".btn-outline-success:visible").contains("Login").click();
    cy.wait(5000);
    cy.get("#loginForm").get("h5").contains("Login");
    cy.get(".btn-success:visible").contains("Login").click();
    cy.url()
      .should("not.include", "profile")
      .then(() => {
        expect(window.localStorage.getItem("token")).to.be.null;
        expect(window.localStorage.getItem("token")).to.be.null;
      });
    cy.get(`#loginEmail:invalid`)
      .invoke("prop", "validationMessage")
      .should("exist");
    cy.get(`input[name="password"]:invalid`)
      .invoke("prop", "validationMessage")
      .should("exist");
    cy.wait(1000);
  });

  it("Can't login with Invalid email", () => {
    cy.visit("/");
    cy.wait(6000);
    cy.get(".btn-outline-success:visible").contains("Login").click();
    cy.wait(5000);
    cy.get("#loginForm").get("h5").contains("Login");
    cy.get("input#loginEmail").type("bushra33@hotmail.com");
    cy.get("input#loginPassword").type("1234567890");
    cy.get(".btn-success:visible").contains("Login").click();
    cy.on("window:alert", (alert) => {
      expect(alert).to.contains(
        "Either your username was not found or your password is incorrect!"
      );
    });
    cy.url()
      .should("not.include", "profile")
      .then(() => {
        expect(window.localStorage.getItem("token")).to.be.null;
        expect(window.localStorage.getItem("profile")).to.be.null;
      });
  });

  it("Can't login with Invalid password", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get(".btn-outline-success:visible").contains("Login").click();
    cy.wait(1000);
    cy.get("#loginForm").get("h5").contains("Login");
    cy.get("input#loginEmail").type("bkalaji33@noroff.no");
    cy.get("input#loginPassword").type("12345");
    cy.get(".btn-success:visible").contains("Login").click();
    cy.on("window:alert", (alert) => {
      expect(alert).to.contains(
        "Either your username was not found or your password is incorrect!"
      );
    });
    cy.url()
      .should("not.include", "profile")
      .then(() => {
        expect(window.localStorage.getItem("token")).to.be.null;
        expect(window.localStorage.getItem("profile")).to.be.null;
      });
  });
});
