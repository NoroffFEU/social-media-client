const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'migmzi',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
