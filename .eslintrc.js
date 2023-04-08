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
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
