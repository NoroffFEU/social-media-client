import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "tc37ox",
  video: false,
  screenshots: false,

  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
});
