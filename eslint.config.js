import globals from 'globals';
import pluginJs from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    ignores: ['node_modules/', 'dist/'],
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      // You can add Jest-specific rules here if needed
    },
  },
];
