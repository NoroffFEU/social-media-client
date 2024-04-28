import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    validEmail: "worktester@noroff.no",
    validPassword: "passord123",
    wrongEmail: "wrong@email.com",
    wrongPassword: "wrongPassword",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
