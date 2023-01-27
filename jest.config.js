module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/*.test.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+.jsx?$': 'babel-jest',
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
