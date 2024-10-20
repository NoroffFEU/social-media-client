import { login } from './login';
import * as storage from '../../storage/index';

global.fetch = jest.fn();

jest.mock('../../storage/index', () => ({
  save: jest.fn(),
  load: jest.fn(),
}));

beforeEach(() => {
  global.localStorage = {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };

  fetch.mockClear();
  jest.clearAllMocks();
});

describe('Login Function', () => {
  it('should store the token when provided with valid credentials', async () => {
    const mockProfile = { name: 'Test User', accessToken: 'valid-token' };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProfile,
    });

    const result = await login('test@example.com', 'password123');

    expect(result).toEqual({ name: 'Test User' });
    expect(storage.save).toHaveBeenCalledWith('token', 'valid-token');
    expect(storage.save).toHaveBeenCalledWith('profile', { name: 'Test User' });
    expect(storage.save).toHaveBeenCalledTimes(2);
  });

  it('should throw an error for invalid credentials', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Unauthorized',
    });

    await expect(login('test@example.com', 'wrong-password')).rejects.toThrow(
      'Unauthorized',
    );
  });
});
