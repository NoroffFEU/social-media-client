import { logout } from '../api/auth/logout.js';

// Jest Test for logout
describe('logout', () => {
  beforeEach(() => {
    // Clear mock localStorage before each test
    window.localStorage.clear();
    // Mock setting initial values in localStorage
    window.localStorage.setItem('token', 'dummyToken');
    window.localStorage.setItem('profile', 'dummyProfile');
  });

  it('should clear the token and profile from localStorage', () => {
    // Ensure the token and profile are set before logout
    expect(window.localStorage.getItem('token')).toBe('dummyToken');
    expect(window.localStorage.getItem('profile')).toBe('dummyProfile');

    // Call the logout function
    logout();

    // Check if the token and profile have been removed from localStorage
    expect(window.localStorage.getItem('token')).toBeNull();
    expect(window.localStorage.getItem('profile')).toBeNull();
  });

  // ... [other tests] ...
});
