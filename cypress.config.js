// cypress.config.js
const { defineConfig } = require('cypress');
require('dotenv').config(); // npm install dotenv

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.js',
    env: {
      VALID_EMAIL: process.env.VALID_EMAIL,
      VALID_PASSWORD: process.env.VALID_PASSWORD,
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
