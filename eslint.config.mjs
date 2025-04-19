import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    // apply to all files
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        // Jest globals
        jest: true,
        describe: true,
        it: true,
        test: true,
        expect: true,
        // Mocha/Cypress hooks
        before: true,
        beforeEach: true,
        after: true,
        afterEach: true,
        // Cypress globals
        cy: true,
        Cypress: true
      }
    }
  },
  pluginJs.configs.recommended
];