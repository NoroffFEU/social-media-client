module.exports = {
  testEnvironment: 'jsdom', 
  testMatch: ['**/tests/**/*.test.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
