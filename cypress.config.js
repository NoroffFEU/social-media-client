import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //hent fra env, gjør om og send til cypress/e2e
    },
  },
});
