const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    
    specPattern: "cypress/e2e/**/*.cy.js",
    excludeSpecPattern: [
      "cypress/e2e/1-getting-started/**/*",
      "cypress/e2e/2-advanced-examples/**/*"
    ],
  },
});