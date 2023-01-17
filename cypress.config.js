/* eslint-disable no-undef */
module.exports = {
  ...(on, config) => {
    config.testFiles = "**/*.e2e.js";
    return config;
  },

  e2e: {
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
