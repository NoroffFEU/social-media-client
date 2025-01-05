import pluginJs from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  {
    languageOptions: {
      globals: {
        browser: true,
        expect: true, 
        vi: true,      
        test: true,  
      },
    },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error", 
    },
  },
  pluginJs.configs.recommended,  
  "plugin:prettier/recommended",  
];
