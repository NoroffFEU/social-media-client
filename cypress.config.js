import { defineConfig } from "cypress";

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
