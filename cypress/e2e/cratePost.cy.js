describe("Checks if create item form validates user inputs correctly based on API restrictions", () => {
    it("Should only post if correctly posted", () => {
      //Login
      cy.visit("http://127.0.0.1:5500/");
      cy.wait(1000);
      cy.get("div.modal-footer > .btn-outline-success")
        .eq(1)
        .click({ force: true });
      cy.wait(1000);
      cy.get("input#loginEmail").type("jorgen.w.engh@noroff.no");
      cy.get("input#loginPassword").type("12345jorgen");
      cy.get("div.modal-footer > button.btn.btn-success")
        .contains("Login")
        .click({ force: true });
  
      cy.wait(1000);
      cy.get("a.btn-outline-success").click();
      cy.wait(1000);
  
      //Putting in wrong credentials 
      cy.get("input#postMedia").type("Nice picture of me");
      cy.get("button.btn.btn-success").contains("Publish").click({ force: true });
      cy.wait(1000);
  
      // Republish with correct credentials 
      cy.get("input#postTitle").type("Its my title");
      cy.get("#postMedia").clear().type("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-1EylY3X0mNFRnXPakyaJqKAD4c8gklMS72YzqeFYGA&s")
      cy.get("button.btn.btn-success").contains("Publish").click({ force: true });
    });
  });



