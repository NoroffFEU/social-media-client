it("should show an error message upon a failed login attempt", () => {
  cy.visit("/");

  cy.wait(1000);
  
  // Click the login button
  cy.get(".btn-outline-success.me-2").click();

  // Fill in the login form
  cy.get("#loginEmail").type("mariuskval87@noroff.no");
  cy.get("#loginPassword").type("mariuskvaal87");

  const stub = cy.stub();
  cy.on("window:alert", stub);

  cy.get("form").eq(2).submit();

  // Wait for the alert to be called
  cy.wait(1000).then(() => {
    expect(stub).to.be.calledOnce;
    expect(stub.getCall(0)).to.be.calledWith("<correct error message>");
  });
});
