describe("Logout Functionality on Multiple Pages", () => {
  const pages = [
    "/post/get-all-posts.html",
    "/post/create/create-post.html",
    "/post/your_posts.html",
    "/post/edit/edit-post.html",
  ];

  Cypress._.each(pages, (page) => {
    it(`should clear the token from localStorage on logout from ${page}`, () => {
      // Set a token in localStorage to simulate a logged-in user
      window.localStorage.setItem("token", "mockedToken");

      // Visit each page where the logout button exists
      cy.visit(page);

      // Simulate the user clicking the logout button
      cy.get("#logoutButton").click();

      // Verify that the token is cleared from localStorage
      cy.window()
        .then((win) => {
          if (page === "/post/create/create-post.html") {
            // Load the Cloudinary Script Manually for the create-post page
            const script = win.document.createElement("script");
            script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
            script.type = "text/javascript";
            win.document.head.appendChild(script);
          }

          return win;
        })
        .then((window) => {
          const token = window.localStorage.getItem("token");
          expect(token).to.not.exist;
        });

      // Vcheck if the user is redirected to the login page
      cy.url().should("include", "/"); // Check if redirected to the login page
    });
  });
});
