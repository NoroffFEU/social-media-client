const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    EMAIL: 'dangfart@noroff.no',
    PASSWORD: 'test123456!',
  },
});
