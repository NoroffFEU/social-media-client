//import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";
import pluginCypress from "eslint-plugin-cypress/flat";

export default [
  pluginJs.configs.recommended,
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
  },
  pluginCypress.configs.recommended,
  {
    rules: {
      'cypress/no-unnecessary-waiting': 'off'
    }
  },
  {
    files: ["cypress.config.js"],
    env: {
      node: true,
    },
    parserOptions: {
      sourceType: "commonjs",
    },
  },
];