describe("Unit testing 3", () => {
  let email = "rotta@noroff.no";
  let password = "rotta123";

  it("Unit - 2 : Creates a new item on the API ", () => {
    cy.visit("/");
    //Login
    cy.loginTest(email, password);
    // cy.wait(1000);
    cy.getLocalStorage("token");
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    //cy.wait(1000);

    //Creates a new item on the API
    cy.createPost(
      "testing unit create post",
      "My unit test - creating a post"
    ).then((post) => {
      expect(post.id).to.not.be.undefined;
      //cy.wait(1000);
      //Delete post
      cy.deletePost(post.id);
    });
  });
});
