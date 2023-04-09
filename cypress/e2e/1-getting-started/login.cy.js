describe("http://localhost:5173/", () => {
    it("can search for Noroff", () => {
      cy.visit("http://localhost:5173/");
      cy.wait(400)
      cy.get("input#registerName").type("Test", { delay: 500 });
      cy.get("input#registerEmail").type("test12@noroff.no", {delay: 500});
      cy.get("input#registerPassword").type("testtest1234", {delay: 500});
      cy.get("input#registerAvatar").type("https://media.snl.no/media/55860/standard_24150166553_ffc44a2cec_o.jpg", {delay:500});
    })
  })