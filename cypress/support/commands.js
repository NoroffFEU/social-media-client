import { login, logout, createPost, deletePost } from "../../src/js/api/index";

Cypress.Commands.add("loginTest", async (email, password) => {
  await login(email, password);
});

Cypress.Commands.add("logout", () => {
  logout();
});

Cypress.Commands.add("createPost", async (title, body) => {
  let post = await createPost(title, body);
  return post;
});

Cypress.Commands.add("deletePost", async (id) => {
  await deletePost(id);
});

//End to end login function:
Cypress.Commands.add("loginE2E", (email, password) => {
  //finds login button and clicks it
  cy.get(`#registerForm button`)
    .contains("Login")
    .should("be.visible")
    //.wait(1000)
    .click();
  //.wait(1000)
});
