const password = "1234abcd";
const mail = "OleBra17268@stud.noroff.no";

describe("LogInFailWithWrongMail", () => {
    it("Cannot submit the login form with invalid email and is shown message", () => {
        cy.wait(1000);
        cy.visit("/");
        cy.get("#registerModal button")
        .contains("Login")
        .should("be.visible")
        .wait(1000)
        .click()
        .wait(1000);

        cy.get(`input#loginEmail[name="email"]`)
        .type("test@test.test")
        .then(($invalidEmail) => {
            expect($invalidEmail[0].validationMessage).to.be.not.empty;
        });

        cy.get(`input#loginPassword[name="password"]`).type(password);

        cy.get(`button[type="submit"]`).contains("Login").click({ force: true });
    });
});

describe("LogInFailWithWrongPassword", () => {
    it("Cannot submit the login form with invalid password and is shown message", () => {
        cy.wait(1000);
        cy.visit("/");
        cy.get("#registerModal button")
        .contains("Login")
        .should("be.visible")
        .wait(1000)
        .click()
        .wait(1000);
        cy.get(`input#loginEmail[name="email"]`)
        .type(mail)
        .then(($validEmail) => {
            expect($validEmail[0].validationMessage).to.be.empty;
        });
        cy.get(`input#loginPassword[name="password"]`)
        .type("wrongpassword")
        .then(($invalidPassword) => {
            expect(`input[type="password"]`);
        });

        cy.wait(1000);
        cy.get(`button[type="submit"]`).contains("Login").click({ force: true });
    });
});