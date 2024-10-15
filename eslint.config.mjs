import globals from "globals";
import pluginJs from "@eslint/js";


export default [
    {
        languageOptions: {
            globals: globals.browser
        },
      rules: {
        "no-var": "error", // Disallow var, enforce let/const
        "semi": ["error", "always"], // Ensure semicolons at the end of statements
      },
    },
    pluginJs.configs.recommended,
];