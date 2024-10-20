import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:cypress/recommended'
  ),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        ...globals.cypress,
      },

      ecmaVersion: 2020,
      sourceType: 'module',
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    plugins: ['jest'],

    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error',
    },
  },
];
