// describe('Login Form', () => {
//   const email = 'towlietest3@noroff.no';
//   const password = 'Towlietest123';

//   it('should give access to profile page when logged in', () => {
//     cy.visit('/');
//     cy.wait(1000);
//     cy.get('#registerModal').contains('Login').click();
//     cy.get('#loginForm').should('be.visible');
//     cy.wait(1000);
//     cy.get('#loginEmail').type(email);
//     cy.get('#loginPassword').type(password);
//     cy.get('button[type=submit]').contains('Login').click();

//     cy.wait(2000);
//     cy.location('href').should('include', 'view=profile&name');
//   });
// });

describe("Login Form", () => {
  const email = "towlietest3@noroff.no";
  const password = "Towlietest123";

  it("should give access to profile page when logged in", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal").contains("Login").click();
    cy.get("#loginForm").should("be.visible");
    cy.wait(1000);
    cy.get("#loginEmail").type(email);
    cy.get("#loginPassword").type(password);
    cy.get("button[type=submit]").contains("Login").click();

    cy.wait(2000);
    cy.location("href").should("include", "view=profile&name");
  });
});
