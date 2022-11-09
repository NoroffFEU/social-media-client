const { defineConfig } = require('cypress');

// disabling and enabling linting to quick-fix errors with no-unused-vars

/* eslint-disable */

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

/* eslint-enable */
