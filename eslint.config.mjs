import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  'eslint:recommended',
  'plugin:@eslint/js/recommended',
  {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    globals: {
      ...globals.browser,
      jest: true,
      describe: true,
      beforeEach: true,
      it: true,
      expect: true,
    },
  },
];
