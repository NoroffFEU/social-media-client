/** @type {import('jest').Config} */
export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[jt]s$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'json'],
  roots: ['<rootDir>/src', '<rootDir>/_tests_'],
};
