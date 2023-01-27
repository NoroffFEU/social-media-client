const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    html: true,
    json: true,
    charts: true,
    inlineAssets: true,
    overwrite: false,
    autoOpen: true,
    cdn: true,
  },
  video: false,
  retries: 1,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
