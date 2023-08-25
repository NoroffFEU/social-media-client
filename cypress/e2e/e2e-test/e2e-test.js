describe("Authentication Tests", () => {
  it("should log in with valid credentials", () => {
    cy.visit("/login"); 

    
    cy.get('input[name="username"]').type("validUsername");
    cy.get('input[name="password"]').type("validPassword");


    cy.get('button[type="submit"]').click();

   
    cy.url().should("include", "/dashboard"); 
  });

  it("should show an error message for invalid credentials", () => {
    cy.visit("/login"); 


    cy.get('input[name="username"]').type("invalidUsername");
    cy.get('input[name="password"]').type("invalidPassword");


    cy.get('button[type="submit"]').click();


    cy.get(".error-message").should("be.visible"); 
  });

  it("should log out successfully", () => {
   
    cy.login("validUsername", "validPassword"); 


    cy.get(".logout-button").click();

  
    cy.url().should("include", "/login");
  });
});