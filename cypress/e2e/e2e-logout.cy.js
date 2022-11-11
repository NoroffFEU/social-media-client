describe("E2E 1", () => {
  it("Logout btn logs the user out when clicked - test", () => {
    cy.visit("/");
    cy.get(".btn-close:visible").click();
    //cy.wait(1000)
    cy.get("button[data-auth='login']:visible").click();
    //cy.wait(1000);

    //Get email input and type
    cy.get("input[type='email']:visible").type("rotta@noroff.no");
    //Get password input and type
    cy.get("input[type='password']:visible").type("rotta123");
    //Get login btn and log in
    cy.get(".btn-success:visible").click();
    //cy.wait(1000);
    //Get localStorage : token
    cy.getLocalStorage("token").then((token) => {
      expect(token).to.not.be.null;
    });

    //Get logout btn and log out
    cy.get("button").contains("Logout").click();
    //cy.wait(1000);
    //Checking that the token from localStorage is gone
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
});
