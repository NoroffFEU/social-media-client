const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.js",
    supportFile: "cypress/support/e2e.js",
    fixturesFolder: "cypress/fixtures",
  },
});
