// it("CAN validate user inputs correctly based on API restrictions", () => {

// });

describe("register with correct information", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500");
    cy.on("uncaught:exception", () => {
      return false;
    });
    cy.url().should("include", "/");
    const milisecond = Date.now();
    cy.get("[data-auth='register']").click();
    cy.wait(600);
    cy.get("#registerForm").should("be.visible");
    cy.get("#registerName").should("be.visible").type(`cypress${milisecond}`);
    cy.get("#registerEmail")
      .should("be.visible")
      .type(`cypress${milisecond}@stud.noroff.no`);
    cy.get("#registerPassword")
      .should("be.visible")
      .type(`cypress3000password`);
    cy.get("#registerAvatar")
      .should("be.visible")
      .type(
        "https://beebom.com/wp-content/uploads/2020/01/Hide-the-Pain-Harold-is-Imgur%E2%80%99s-Meme-of-the-Decade.jpg?resize=1080%2C720&quality=75&strip=all"
      );
    cy.get("#registerForm button").contains("Create Profile").click();
    cy.wait(3200);
    cy.reload();
  });

  it("can register", () => {
    expect(localStorage.getItem("token")).to.not.be.null;
  });
});

describe("Login with correct information ", () => {
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
    cy.get("#loginEmail").should("be.visible").type("njbr10@stud.noroff.no");
    cy.get("#loginPassword").should("be.visible").type("qwertyuiop");
    cy.get("#loginForm button").should("be.visible").contains("Login").click();
    cy.wait(3200);
    cy.reload();
  });

  it("CAN login", () => {
    expect(localStorage.getItem("token")).to.not.be.null;
  });
});

// describe("Login with wron")
