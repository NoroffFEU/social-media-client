require("dotenv").config();
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  modifyObstructiveCode: true,
   ...(on, config) => {
    config.testFiles = "**/*.e2e.js";
    return config;
  },

  e2e: {
    
    setupNodeEvents(on, config) {
      config.baseUrl = process.env.CYPRESS_BASE_URL;
      config.env.API_URL = process.env.CYPRESS_API_URL;
      config.env.API_TOKEN = process.env.Cypress_APT_TOKEN

      // implement node event listeners here

      return config;
    },
  },

})
