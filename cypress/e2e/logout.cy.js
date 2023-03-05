//testuser marita@stud.noroff.no
//testpassword Storkebab94

describe("Logout", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  it("logout", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get(".btn-close:visible").click();
    cy.wait(500);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(1500);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type("marita@stud.noroff.no");
    cy.get("input[type='password']:visible")
      .should("exist")
      .type("Storkebab94");
    cy.get(".btn-success:visible").click();
    cy.wait(2000);
    cy.get("button[data-auth='logout']").click();
    cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
});
