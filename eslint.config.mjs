import globals from "globals";
import pluginJs from "@eslint/js";
import cypressPlugin from "eslint-plugin-cypress";

export default [
  // Applying ESLint's recommended configuration globally
  {
    ...pluginJs.configs.recommended,
  },

  // Configuration for regular JavaScript files (browser environment)
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        require: "readonly", // Allow require in browser files
        module: "readonly", // Allow module in browser files
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },

  // Configuration for Jest config file (Node.js environment)
  {
    files: ["jest.config.js"], // Specifically target jest.config.js
    languageOptions: {
      globals: {
        ...globals.node, // Node.js globals
        require: "readonly", // Allow require in jest.config.js
        module: "readonly", // Allow module in jest.config.js
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },

  // Configuration for Jest test files
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
        global: "readonly",
        window: "readonly",
        localStorage: "readonly",
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },

  // Configuration for Cypress test files
  {
    files: ["cypress/**/*.js", "cypress.config.js"],
    plugins: {
      cypress: cypressPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.cypress,
        cy: "readonly", // Allow `cy` as a global variable
        require: "readonly", // Allow require in Cypress files
        module: "readonly", // Allow module in Cypress files
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "cypress/no-unnecessary-waiting": "error", // Example rule for Cypress
      "no-undef": "off", // Disable no-undef for Cypress files
    },
  },
];
