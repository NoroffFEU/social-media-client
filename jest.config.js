module.exports = {
    testEnvironment: 'jsdom',  // Setting environment to jsdom
    transform: {
      '^.+\\.js$': 'babel-jest'  // Transform JavaScript files using babel-jest
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/']  // Ignore node_modules for transformation
  };
  