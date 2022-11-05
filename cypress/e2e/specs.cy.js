// it("CAN validate user inputs correctly based on API restrictions", () => {

// });

// !! VALID INFORMATION
// describe("Social media app: Register functionality with VALID information", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:5500");
//     cy.on("uncaught:exception", () => {
//       return false;
//     });
//     cy.url().should("include", "/");
//     const milisecond = Date.now();
//     cy.get("[data-auth='register']").click();
//     cy.wait(600);
//     cy.get("#registerForm").should("be.visible");
// cy.get("#registerName").should("be.visible").type(`cypress${milisecond}`);
// cy.get("#registerEmail")
//   .should("be.visible")
//   .type(`cypress${milisecond}@stud.noroff.no`);
//     cy.get("#registerPassword")
//       .should("be.visible")
//       .type(`cypress3000password`);
//     cy.get("#registerAvatar")
//       .should("be.visible")
//       .type(
//         "https://conteudo.imguol.com.br/c/noticias/ef/2019/11/08/andras-arato-ficou-conhecido-como-hide-pain-harold-por-causa-de-seu-sorriso-nervoso-1573231062755_v2_900x506.jpg"
//       );
//     cy.get("#registerForm button").contains("Create Profile").click();
//     cy.wait(3200);
//     cy.reload();
//   });

//   it("CAN register with valid information", () => {
//     expect(localStorage.getItem("token")).to.not.be.null;
//   });
// });

describe("Social media app: Login functionality with VALID information", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500");
    cy.clearLocalStorage();
    cy.on("uncaught:exception", () => {
      return false;
    });
    cy.url().should("include", "/");
    cy.url().should("not.include", "/profile");
    cy.url().should("not.include", "/posts");
    cy.get("[data-auth='login']").click();
    cy.wait(600);
    // const milisecond = Date.now();
    cy.get("#loginEmail").should("be.visible").type(`njbr10@stud.noroff.no`);
    cy.get("#loginPassword").should("be.visible").type(`qwertyuiop`);
    cy.get("#loginForm button").should("be.visible").contains("Login").click();
    cy.wait(3200);
    cy.reload();
    cy.wait(3200);
  });

  // it("CAN login with valid information", () => {
  //   expect(localStorage.getItem("token")).to.not.be.null;
  // });

  it("CREATE post form validates user inputs correctly based on API restrictions", () => {
    cy.get(".btn-outline-success")
      .should("be.visible")
      .contains("New Post")
      .click({ force: true });
    cy.wait(600);
    const milisecond = Date.now();
    cy.get("#postTitle").should("be.visible").type(`cypress${milisecond}`);
    cy.get("#postTags").should("be.visible").type(`cypress${milisecond}`);
    cy.get("#postMedia")
      .should("be.visible")
      .type(
        "https://conteudo.imguol.com.br/c/noticias/ef/2019/11/08/andras-arato-ficou-conhecido-como-hide-pain-harold-por-causa-de-seu-sorriso-nervoso-1573231062755_v2_900x506.jpg"
      );
    cy.wait(2000);
    cy.get("#postBody").should("be.visible").type(`cypress${milisecond}`);
    cy.get("#postForm [data-action='submit']").should("be.visible").click();
    // cy.wait()
    // cy.get("#postForm [data-action='submit']").should("not.be.visible")
    cy.url().should("not.include", "/?view=post");
    cy.get(`.post .m-0`);
  });
});

// !!INVALID INFORMATION
// describe("Social media app: Register functionality with INVALID email", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:5500");
//     cy.on("uncaught:exception", () => {
//       return false;
//     });
//     cy.url().should("include", "/");
//     const milisecond = Date.now();
//     cy.get("[data-auth='register']").click();
//     cy.wait(600);
//     cy.get("#registerForm").should("be.visible");
//     cy.get("#registerName").should("be.visible").type(`cypress${milisecond}`);
//     cy.get("#registerEmail")
//       .should("be.visible")
//       .type(`cypress${milisecond}@gmail.com`);
//     cy.get("#registerPassword")
//       .should("be.visible")
//       .type(`cypress3000password`);
//     cy.get("#registerAvatar")
//       .should("be.visible")
//       .type(
//         "https://conteudo.imguol.com.br/c/noticias/ef/2019/11/08/andras-arato-ficou-conhecido-como-hide-pain-harold-por-causa-de-seu-sorriso-nervoso-1573231062755_v2_900x506.jpg"
//       );
//     cy.get("#registerForm button").contains("Create Profile").click();
//     cy.wait(3200);
//   });

//   it("CANNOT Login with invalid email", () => {
//     expect(localStorage.getItem("token")).to.be.null;
//   })

// })
// describe("Social media app: Login functionality with INVALID Password", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:5500");
//     cy.clearLocalStorage();
//     cy.on("uncaught:exception", () => {
//       return false;
//     });
//     cy.url().should("include", "/");
//     cy.url().should("not.include", "/profile");
//     cy.url().should("not.include", "/posts");
//     cy.get("[data-auth='login']").click();
//     cy.wait(600);
//     cy.get("#loginEmail").should("be.visible").type("njbr10@stud.noroff.no");
//     cy.get("#loginPassword").should("be.visible").type("##¤%&345'");
//     cy.get("#loginForm button").should("be.visible").contains("Login").click();
//     cy.wait(3200);
//   });

//   it("CANNOT login with invalid password", () => {
//     expect(localStorage.getItem("token")).to.be.null;
//   });

// })
