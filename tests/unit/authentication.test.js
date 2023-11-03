/**
* @jest-environment jsdom
*/

import { login } from "../../src/js/api/auth/login";
import { logout } from "../../src/js/api/auth/logout";

// Mocking the API request of the login function
jest.mock('node-fetch', () => {
  return jest.fn(() => Promise.resolve({
      ok: true,
      json: jest.fn().mockResolvedValue({ accessToken: "sampleToken", /* other mock profile data */ })
  }));
});


const localStorageMock = (function() {
    let store = {};
    return {
        getItem: function(key) {
            return store[key] || null;
        },
        setItem: function(key, value) {
            store[key] = value.toString();
        },
        removeItem: function(key) {
            delete store[key];
        },
        clear: function() {
            store = {};
        }
    };
})();
Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
});

describe('Authentication Unit Tests', () => {
  beforeEach(() => {
      localStorage.clear();
  });

  it('The login function fetches and stores a token in browser storage', async () => {
    await login('userEmail', 'userPassword');
    const token = localStorage.getItem('token');
    expect(token).toEqual(JSON.stringify("sampleToken"));
  });
  it('The logout function clears the token from browser storage', () => {
      localStorage.setItem('token', 'mockToken'); // change this to 'token'
      logout();
      const token = localStorage.getItem('token'); // change this to 'token'
      expect(token).toBeNull();
  });

  it('logout function should remove authToken', () => {
    localStorage.setItem('token', 'testToken'); // change this to 'token'
    logout();
    const token = localStorage.getItem('token'); // change this to 'token'
    expect(token).toBeNull();
  });
});
