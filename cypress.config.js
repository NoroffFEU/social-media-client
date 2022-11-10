// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
// module.exports = {
//   e2e: {
//     setupNodeEvents(on, config) {
//       require("cypress-localstorage-commands/plugin")(on, config);
//       return config;
//     },
//   },
// };
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
