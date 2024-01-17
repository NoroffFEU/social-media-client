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

// Assign this to the global fetch function
global.fetch = mockFetchSuccess;

describe('login', () => {
  it('saves the token and profile when login is successful', async () => {
    const profile = await login('test@example.com', 'password123');

    expect(mockFetchSuccess).toHaveBeenCalled();
    expect(storage.save).toHaveBeenCalledWith('token', 'fakeToken');
    expect(storage.save).toHaveBeenCalledWith('profile', { name: 'Test User' });
    expect(profile).toEqual({ name: 'Test User' });
  });
});
