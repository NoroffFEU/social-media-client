const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
    defaultCommandTimeout: 10000,
  },
  env: {
    VALID_USERNAME: "exampletest@noroff.no",
    VALID_PASSWORD: "secrettest",
  },
});
