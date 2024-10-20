import { jest } from '@jest/globals';
import { login } from './login.js';

describe('login function', () => {
  beforeEach(() => {
    // Mock the localStorage setItem function
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: jest.fn(),
        getItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
      },
      writable: true,
    });

    // Mock the global fetch function
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear all mocks after each test
  });

  it('should store a token and profile when provided with valid credentials', async () => {
    // Mock a successful fetch response
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        token: 'testToken',
        profile: { name: 'Test User' },
      }),
    });

    // Call the login function
    await login('test@example.com', 'password');

    // Debugging line - print all calls to localStorage.setItem

    // Verify that setItem is called with the combined token and profile data
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      'profile',
      JSON.stringify({ token: 'testToken', profile: { name: 'Test User' } }),
    );
  });

  it('should throw an error when the response is not ok', async () => {
    // Mock a failed fetch response
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 401,
      statusText: 'Unauthorized', // Adding statusText to simulate the error message
    });

    await expect(login('test@example.com', 'wrongpassword')).rejects.toThrow(
      'Unauthorized',
    );
  });
});
