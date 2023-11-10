import { login } from './login.js'; // Path to your login function
import * as storage from '../../storage/index.js'; // Path to your storage functions


const key = "token";
const token = "12345";

// Mock the localStorage
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

Object.defineProperty(global, 'localStorage', { value: localStorageMock });

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: 'fake_token', user: { name: 'John Doe' } }),
  })
);

// Spy on the save function from your storage module
const saveSpy = jest.spyOn(storage, 'save');

describe('login function', () => {
  beforeEach(() => {
    fetch.mockClear();
    localStorageMock.clear();
    saveSpy.mockClear();
  });

  it('should fetch and store a token and profile in localStorage', async () => {
    const email = 'test@noroff.no';
    const password = 'testpassword';

    // Call the login function
    const profile = await login(email, password);

    // Check if fetch has been called with the correct endpoint and options
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('/social/auth/login'), expect.objectContaining({
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: expect.any(Object),
    }));

    // Check if the save function has been called correctly for token and profile
    expect(saveSpy).toHaveBeenCalledTimes(2);
    expect(saveSpy).toHaveBeenCalledWith('token', 'fake_token');
    expect(saveSpy).toHaveBeenCalledWith('profile', expect.any(Object));

    // Verify that the token is correctly stored in localStorage
    expect(localStorage.getItem('token')).toEqual(JSON.stringify('fake_token'));

    // Verify that the profile (without the accessToken) is stored
    expect(localStorage.getItem('profile')).toEqual(JSON.stringify({ name: 'John Doe' }));

    // The profile returned should not have the accessToken property
    expect(profile).toEqual({ user: { name: 'John Doe' } });
  });

  it('throws an error if the credentials are incorrect', async () => {
    fetch.mockImplementationOnce(() => Promise.resolve({ ok: false, statusText: "Unauthorized" }));
    
    await expect(login('wrong@example.com', 'wrongpassword')).rejects.toThrow("either the username or password is incorrect");

    // The save function should not have been called since the login failed
    expect(saveSpy).not.toHaveBeenCalled();
  });
});
