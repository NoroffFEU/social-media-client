module.exports = {
    transform: {
    '^.+\\.js$': 'babel-jest', },
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'], 
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], 
  };
  