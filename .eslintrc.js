module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "files": ["**/*index.js"],
            "env": {"jest": true},
            "plugins": ["jest"],
            "extends": ["plugin:jest/recommenden"],
            "rules": {"jest/prefer-expect-assertions": "off" }
        }, 
        {
            "files": ["**/*.cy.js"],
            "env": { "cypress/globals": true},
            "plugins": ["cypress"],
            "extends": ["plugin:cypress/recommended"],
            "rules": {
                "cypress/no-unnecessary-waiting": "off",
                "no-unused-vars": "off"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
    
}
