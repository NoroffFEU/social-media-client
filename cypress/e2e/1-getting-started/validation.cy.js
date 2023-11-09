// describe("Login Form", () => {
//     it("should give access to profile page when logged in", () => {
//       cy.visit("/");
//       cy.wait(1000);
//       cy.get("#registerModal").contains("Login").click();
//       cy.get("#loginForm").should("be.visible");
//       cy.wait(1000);
//       cy.get("#loginEmail").type("towlietest3@wrong.no");
//       cy.get("#loginPassword").type("To123");
//       cy.get('#loginForm > .modal-footer > .btn-success').contains("Login").click();  
//       cy.wait(500);
//         const expectedAlertText =
//             "Either your username was not found or your password is incorrect";
//             cy.on("window:alert", (text) => {
//             expect(text).to.contains(expectedAlertText);
//     });
//         });
//   });
