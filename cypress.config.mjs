import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,cy.js}',
		baseUrl: 'http://localhost:8080',
	},
});
