module.exports = {
  testEnvironment: 'jsdom', 
  testMatch: ['**/__tests__/**/*.test.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
