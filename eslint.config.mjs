import globals from "globals";
import pluginJs from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: { "prettier/prettier": "error" },
    ...pluginJs.configs.recommended,
    ...prettierConfig,
  },
];
