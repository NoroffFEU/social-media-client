const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://api.noroff.dev/api/v1',
    specPattern: 'cypress/**/*.spec.js', // Adjusted this line
  },
});
