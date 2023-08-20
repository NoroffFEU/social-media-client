/* eslint-env jest */

// mocks for the local storage
export function localStorageMock() {
  let store = {};

  global.localStorage = {
    setItem: jest.fn((key, value) => {
      store[key] = value;
    }),
    getItem: jest.fn((key) => store[key] || null),
    removeItem: jest.fn((key) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
}
