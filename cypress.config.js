
// cypress.config.js
const { defineConfig } = require("cypress");
require("dotenv").config(); 

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // Environment variables from the .env file
      config.env.LOGIN_EMAIL = process.env.LOGIN_EMAIL;
      config.env.LOGIN_PASSWORD = process.env.LOGIN_PASSWORD;
      return config;
    },
  },
});