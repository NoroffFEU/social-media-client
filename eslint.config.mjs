import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
    {
        files: ['**/*.test.js'],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
        plugins: {
            jest: jestPlugin,
        },
        rules: {
            ...jestPlugin.configs.recommended.rules,
        },
    },
    {
        env: {
            browser: true,
            es2021: true,
            node: true,
        },
        extends: 'eslint:recommended',
        overrides: [
            {
                files: ['**/*.cy.js'],
                env: { 'cypress/globals': true },
                plugins: ['cypress'],
                extends: ['plugin:cypress/recommended'],
                rules: {
                    'cypress/no-unnecessary-waiting': 'off',
                    'no-unused-vars': 'off',
                },
            },
        ],
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
    },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
];
