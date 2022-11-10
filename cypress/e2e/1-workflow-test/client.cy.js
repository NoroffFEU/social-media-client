class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

describe("login", () => {
  it("CAN view website", () => {
    cy.visit("http://localhost:5500");
  });
  it("CAN view the register form", () => {
    cy.get("header [data-auth='register']").click({ force: true });
    cy.get("form button").contains("Create Profile").should("be.visible");
  });
  it("CAN view the login form", () => {
    cy.get("#registerModal button")
      .contains("Login")
      .should("be.visible")
      .click({ delay: 1000 });
  });
  it("CAN type email in login form", () => {
    cy.get("#loginEmail").type("cypress@noroff.no", {
      force: true,
      delay: 100,
    });
  });
  it("CAN type password in login form", () => {
    cy.get("#loginPassword").type("ABCeasyas123", { delay: 100 });
  });
  it("CAN submit login form", () => {
    cy.get("#loginForm button").contains("Login").should("be.visible").click();
  });
});
