import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginJest from 'eslint-plugin-jest';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },

  pluginJs.configs.recommended,

  {
    files: ['**/*.test.js', '**/__tests__/**/*.js'],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: {
        ...globals.jest,
        global: true,
      },
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
    },
  },
];
