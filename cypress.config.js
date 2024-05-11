const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    headless: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
