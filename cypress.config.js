const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
  },
});

module.exports = {
  baseUrl: 'https://api.noroff.dev/api/v1',
  integrationFolder: 'cypress/integration',
  testFiles: '**/*.spec.js',
};
