import { logout } from './logout.js';

const mockLocalStorage = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value;
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

beforeAll(() => {
  // Setup the global localStorage mock before all tests
  global.localStorage = mockLocalStorage;
});

beforeEach(() => {
  // Clear the mock localStorage before each test
  localStorage.clear();
});

describe('logout function', () => {
  it('removes the token from localStorage', () => {
    // Mock setting a token in localStorage
    localStorage.setItem('token', '12345');

    // Call the logout function
    logout();

    // Check if the token has been removed
    expect(localStorage.getItem('token')).toBeNull();
  });
});
