const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "v1aupd",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
