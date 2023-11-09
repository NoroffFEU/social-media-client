/**
* @jest-environment jsdom
*/
import fetch from 'node-fetch';
global.fetch = fetch;

import { login } from "../../src/js/api/auth/login";
import { logout } from "../../src/js/api/auth/logout";

// Mocking the API request of the login function
jest.mock('node-fetch', () => {
  return jest.fn(() => Promise.resolve({
      ok: true,
      json: jest.fn().mockResolvedValue({ accessToken: "sampleToken" /* other mock profile data */ })
  }));
});

// Mocking the localStorage
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

  // Added unit test for the logout function
  it('The logout function clears the token from browser storage', () => {
    // Set a sample token to simulate a user being logged in
    localStorage.setItem('token', 'sampleToken');

    // Call the logout function
    logout();

    // Get the token from local storage after logout
    const token = localStorage.getItem('token');

    // Assert that the token is now null, indicating it was removed from storage
    expect(token).toBeNull();
  });
});
