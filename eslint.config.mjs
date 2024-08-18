import { defineFlatConfig } from 'eslint-define-config';
import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginJest from 'eslint-plugin-jest';
import pluginCypress from 'eslint-plugin-cypress';
import configPrettier from 'eslint-config-prettier';

const recommendedJsRules = pluginJs.configs.recommended.rules;
const recommendedJestRules = pluginJest.configs.recommended.rules;
const prettierConfigRules = configPrettier.rules || {};

export default defineFlatConfig([
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                require: 'readonly',
                module: 'readonly',
            },
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            prettier: pluginPrettier,
            cypress: pluginCypress,
        },
        rules: {
            ...recommendedJsRules,
            'prettier/prettier': 'error',
            ...prettierConfigRules,
        },
    },
    {
        files: ['**/*.test.js', '**/*.test.ts', '**/*.mock.js'],
        languageOptions: {
            globals: {
                ...globals.jest,
                ...globals.browser,
                ...globals.node,
                global: 'writable',
                describe: 'readonly',
                it: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                beforeAll: 'readonly',
                afterAll: 'readonly',
            },
        },
        plugins: {
            jest: pluginJest,
        },
        rules: {
            ...recommendedJestRules,
            'jest/prefer-expect-assertions': 'off',
        },
    },
    {
        files: ['**/*.cy.js', '**/*.cy.ts', '**/support/*.js'],
        languageOptions: {
            globals: {
                ...globals.cypress,
                ...globals.browser,
                ...globals.node,
                cy: 'readonly',
                Cypress: 'readonly',
                describe: 'readonly',
                it: 'readonly',
                before: 'readonly',
                beforeEach: 'readonly',
                after: 'readonly',
                afterEach: 'readonly',
            },
        },
        plugins: {
            cypress: pluginCypress,
        },
        rules: {
            'cypress/no-assigning-return-values': 'warn',
            'cypress/no-unnecessary-waiting': 'warn',
            'no-undef': 'off',
        },
    },
]);
