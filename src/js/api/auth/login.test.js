import { login } from './login';
import * as storage from '../../storage/index';

jest.mock('../../storage/index.js');

// Create a mock function that will pretend to be the native fetch function
const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({
    accessToken: 'fakeToken',
    name: 'Test User',
  }),
});

// Create a mock function that simulates a failed fetch call
const mockFetchFailure = jest.fn().mockResolvedValue({
  ok: false,
  statusText: 'Unauthorized',
});

describe('login', () => {
  beforeEach(() => {
    // Clear all mock function call histories before each test
    mockFetchSuccess.mockClear();
    mockFetchFailure.mockClear();
    storage.save.mockClear();
  });

  it('saves the token and profile when login is successful', async () => {
    // Assign this to the global fetch function
    global.fetch = mockFetchSuccess;

    const profile = await login('test@test.com', 'password');

    expect(mockFetchSuccess).toHaveBeenCalled();
    expect(storage.save).toHaveBeenCalledWith('token', 'fakeToken');
    expect(storage.save).toHaveBeenCalledWith('profile', { name: 'Test User' });
    expect(profile).toEqual({ name: 'Test User' });
  });

  it('throws an error when login is unsuccessful', async () => {
    // Override the global fetch with the failure mock
    global.fetch = mockFetchFailure;

    await expect(async () => {
      await login('test@test.com', 'wrongpassword');
    }).rejects.toThrow('Unauthorized');
  });
});
