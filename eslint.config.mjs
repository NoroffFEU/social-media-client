import globals from 'globals';
import pluginJs from '@eslint/js';
import jest from 'eslint-plugin-jest';
import cypress from 'eslint-plugin-cypress';

export default [
	{
		files: ['src/**/*.js', 'cypress/**/*.js'], // Include your Cypress test files
		ignores: [
			'node_modules/*', // ignore its content
		],
		languageOptions: {
			globals: {
				...globals.browser,
				describe: 'readonly', // Jest and Mocha
				it: 'readonly', // Jest and Mocha
				expect: 'readonly', // Jest
				cy: 'readonly', // Cypress
				beforeEach: 'readonly', // Jest
				global: 'readonly',
				jest: 'readonly',
			},
			parserOptions: {
				ecmaVersion: 2021,
				sourceType: 'module',
			},
		},
		rules: {
			'comma-dangle': ['error', 'always-multiline'],
			'no-console': 'warn',
			'no-unused-vars': 'warn',
			indent: ['error', 2],
			quotes: ['error', 'single'],
		},
	},
	// Add plugin configurations directly here instead of using extends
	pluginJs.configs.recommended,
	{
		plugins: {
			jest,
			cypress,
		},
	},
];
