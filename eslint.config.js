import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import jestPlugin from "eslint-plugin-jest";
import cypressPlugin from "eslint-plugin-cypress";

export default [
	{
		ignores: ["node_modules/**"],
	},
	{
		files: ["**/*.js"],
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: "module",
			globals: {
				window: "readonly",
				document: "readonly",
				console: "readonly",
				localStorage: "readonly",
				location: "readonly",
				URL: "readonly",
				URLSearchParams: "readonly",
				FormData: "readonly",
				Image: "readonly",
				fetch: "readonly",
				alert: "readonly",

				// Test-spesifikke globals
				describe: "readonly",
				it: "readonly",
				expect: "readonly",
				beforeEach: "readonly",
				afterAll: "readonly",
				beforeAll: "readonly",
				test: "readonly",
				jest: "readonly",
				global: "readonly",

				// Cypress-spesifikke globals
				cy: "readonly",
				Cypress: "readonly",
			},
		},
		rules: {
			"no-unused-vars": "warn",
			"prettier/prettier": "warn",
		},
		plugins: {
			prettier: prettierPlugin,
			jest: jestPlugin,
			cypress: cypressPlugin,
		},
		settings: {
			jest: {
				version: 29,
			},
		},
	},
	js.configs.recommended,
	prettierConfig,
];
