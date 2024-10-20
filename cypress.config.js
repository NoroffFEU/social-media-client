import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5500', // Adjust this if needed
    watchForFileChanges: true,
    specPattern: 'cypress/e2e/**/*.cy.js',
    defaultCommandTimeout: 20000,
    retries: 2,
    setupNodeEvents(on, config) {
      // Add any node event listeners if necessary
    },
  },
});
