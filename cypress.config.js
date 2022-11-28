import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    URL: "https://fermain.github.io/social-media-client/",
    setupNodeEvents(on, config) {
      config.env = {
        ...process.env,
        ...config.env,
      };
      return config;
    },
  },
  video: false,
});
