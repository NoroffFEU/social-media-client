import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  screenshots: false,

  e2e: {
    setupNodeEvents(on, config) {},
  },
});
