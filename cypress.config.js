const { defineConfig } = require("cypress");

require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    CORRECT_EMAIL: process.env.EMAIL,
    CORRECT_PASSWORD: process.env.PASSWORD,
    INVALID_EMAIL: process.env.INVALID_EMAIL,
  },
});
