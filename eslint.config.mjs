export default {
	env: {
		browser: true,
		es2021: true,
	},
	extends: 'eslint:recommended',
	overrides: [
	],
	parseOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'no-unused-vars': 'warn',
	},
};
