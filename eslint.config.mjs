import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import cypress from "eslint-plugin-cypress";
import jest from "eslint-plugin-jest";

export default defineConfig([
  // Base configuration for all JavaScript files
  js.configs.recommended,
  
  // Cypress configuration file
  {
    files: ["cypress.config.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off"
    }
  },
  
  // General JavaScript files
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
  },
  
  // Cypress test files - the main fix is here
  {
    files: ["**/*.cy.js", "cypress/e2e/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        cy: "readonly",
        Cypress: "readonly",
        describe: "readonly",
        it: "readonly",
        beforeEach: "readonly",
        expect: "readonly"
      },
    },
    plugins: {
      cypress,
    },
    rules: {
      ...cypress.configs.recommended.rules,
      "cypress/no-unnecessary-waiting": "off",
      "no-unused-vars": "off",
      "no-undef": "off"
    },
  },
  
  // Jest test files
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
      },
    },
    plugins: {
      jest,
    },
    rules: {
      ...jest.configs.recommended.rules,
      "jest/prefer-expect-assertions": "off",
    },
  },
]);