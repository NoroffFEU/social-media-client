import globals from "globals";
import pluginJs from "@eslint/js";


export default [
    { ignores: ["cypress.config.js"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
];