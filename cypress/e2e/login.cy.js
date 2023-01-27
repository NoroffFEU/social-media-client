
describe("Login Test", () => {
  it("Login with valid credentials", () => {
    const email = "sjur.hassel@gmail.com"
    const pswrd = "@SjurHassel2023"

    cy.visit("/")
    cy.title().should("contain", "Client")
    cy.title().should("eq", "Test Client")
    cy.get("input#loginEmail[name='email']").type(`${email}`)
    cy.get("input#loginPassword[name='password']").type(`${pswrd}`)
    cy.get("button[type='submit']").contains("Login").click()
  })
})