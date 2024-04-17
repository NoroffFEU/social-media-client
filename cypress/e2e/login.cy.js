/*represents an end-to-end test scenario for logging into
 a web application with Cypress. It interacts with various
  elements on the page and asserts that the login process
   is successful by checking for the presence of a logout
    button after logging in
*/

it("visits page and logs in successfully with valid user data", () => {
  cy.visit("/");
  cy.wait(1000);
  cy.get(
    "#registerForm > div.modal-footer > button.btn-outline-success",
  ).click();
  cy.get("#loginEmail").invoke("val", "shorna@noroff.no");
  cy.get("#loginPassword").invoke("val", "shornashorna");
  cy.wait(500);
  cy.get("#loginForm button").contains("Login").click();
  cy.wait(1000);
  cy.get("button.btn-outline-warning").contains("Logout").should("exist");
});
