const { defineConfig } = require("cypress");
//require("dotenv/config");
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    },
  },
};
