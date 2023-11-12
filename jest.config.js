module.exports = {
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'], 
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], 
  };
  