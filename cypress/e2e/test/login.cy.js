const correctEmail = "RoaHan10771@stud.noroff.no";
const correctPassword = "Pass1234";
const wrongEmail = "RoaHanWRONG@stud.noroff.no";
const wrongPassword = "Wrong1234";

describe("Login flow", () => {
    it("should deny empty input submit", () => {
        cy.visit("/");
        cy.wait(500);
        cy.get("#registerModal").constains("Login").click();
        cy.wait(500);
        cy.get("#loginForm").should("be.visible");
        cy.get("button[type=submit").constains("Login").click();
        cy.get("#loginEmail:invalid").should("exist");
    })

    it("should deny empty password input", () => {
        cy.visit("/");
        cy.wait(500);
        cy.get("#registerModal").constains("Login").click();
        cy.wait(500);
        cy.get("#loginForm").should("be.visible");
        cy.get("#loginEmail").type(correctEmail);
        cy.get("button[type=submit").constains("Login").click();
        cy.get("#loginPassword:invalid").should("exist");
    })

    it("should deny invalid email", () => {
        cy.visit("/");
        cy.wait(500);
        cy.get("#registerModal").constains("Login").click();
        cy.wait(500);
        cy.get("#loginForm").should("be.visible");
        cy.get("#loginEmail").type(correctEmail);
        cy.get("button[type=submit").constains("Login").click();
        cy.get("#loginEmail:invalid").should("exist");
    })
})