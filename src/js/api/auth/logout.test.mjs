import { jest } from '@jest/globals';
import { logout } from './logout.js';

describe('logout function', () => {
  beforeEach(() => {
    // Mock the localStorage removeItem function
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: jest.fn(),
        getItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
      },
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear all mocks after each test
  });

  it('should clear the token and profile from storage', () => {
    // Call the logout function
    logout();

    // Verify that removeItem is called with 'token' and 'profile'
    expect(window.localStorage.removeItem).toHaveBeenCalledWith('token');
    expect(window.localStorage.removeItem).toHaveBeenCalledWith('profile');
  });
});
