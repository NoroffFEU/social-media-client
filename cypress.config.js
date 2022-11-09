const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// module.exports = defineConfig({
//   e2e: {
//     URL: "https://fermain.github.io/social-media-client/",
//     setupNodeEvents(on, config) {
//       config.env = {
//         ...process.env,
//         ...config.env,
//       };
//       return config;
//     },
//   },
//   video: false,
// });
