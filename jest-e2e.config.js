// eslint-disable-next-line no-undef
module.exports = {
  preset: 'cypress',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['jest-localstorage-mock'],
};
