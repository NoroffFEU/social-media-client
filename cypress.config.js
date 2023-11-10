const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
    setupNodeEvents() {
      // If you have no specific setup here, you can leave this empty
      // or remove the setupNodeEvents function entirely if not needed
    },
  },
});
