import { login } from '../src/js/api/auth/login.js';
import { apiPath } from '../src/js/api/constants.js'; // Import the API path

// Mock the fetch API globally
global.fetch = jest.fn();

// Mock the entire storage module
jest.mock('@storage/index.js', () => ({
  save: jest.fn(),
  load: jest.fn(), // Mock the load function
}));

describe('Login function', () => {
  const mockLoad = require('@storage/index.js').load;
  const mockSave = require('@storage/index.js').save;

  beforeEach(() => {
    // Clear mocks before each test
    fetch.mockClear();
    mockLoad.mockClear();
    mockSave.mockClear();

    // Mock console.error to suppress console output during tests
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Restore all mocks after each test
  });

  it('should save token and profile on successful login', async () => {
    // Mock successful fetch response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        accessToken: 'mock-token',
        name: 'test-user',
      }),
    });

    // Mock load function to return null initially
    mockLoad.mockReturnValue(null);

    const profile = await login('test@example.com', 'password123');

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'password123',
      }),
      headers: expect.any(Object),
    });

    // Check that the `save` function has been called correctly
    expect(mockSave).toHaveBeenCalledWith('token', 'mock-token');
    expect(mockSave).toHaveBeenCalledWith('profile', { name: 'test-user' });
    expect(profile).toEqual({ name: 'test-user' });
  });

  it('should throw an error if the login fails', async () => {
    // Mock a failed response
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Unauthorized',
    });

    // Mock load function to return null initially
    mockLoad.mockReturnValue(null);

    await expect(login('test@example.com', 'wrongpassword')).rejects.toThrow(
      'Unauthorized',
    );
  });
});
