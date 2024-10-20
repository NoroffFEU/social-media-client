export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Transform JavaScript files using Babel
  },
  // Add testMatch to include .mjs files
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
    '**/?(*.)+(spec|test).mjs',
  ],
};
