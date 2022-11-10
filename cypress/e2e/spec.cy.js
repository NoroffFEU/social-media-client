describe("First test", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.login("heihei123@stud.noroff.no", "heihei123");
    cy.getLocalStorage("token");
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
  });
});

// describe("Login with token", () => {
//     let email = "heihei123@stud.noroff.no";
//     let password = "heihei123";

//     it("Token is shown", () => {
//       cy.visit("/");
//       cy.login(email, password);
//       cy.getLocalStorage("token");
//       cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
//     });
//   });
