import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    validEmail: "benny123@noroff.no",
    validPassword: "11111111",
    wrongEmail: "wrong@email.com",
    wrongPassword: "wrongPassword",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
