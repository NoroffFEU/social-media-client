const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  video: false,
  screenshotsFolder: "cypress/screenshots",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
