import { login } from './login';
import * as storage from '../../storage/index.js'; // Adjust the path as needed

jest.mock('../../storage/index.js');

global.fetch = jest.fn();

describe('login function', () => {
  beforeEach(() => {
    fetch.mockClear();
    storage.save.mockClear();
  });

  it('should save token on successful login', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ accessToken: 'test-token', user: 'test-user' }),
    });

    await login('test@example.com', 'password123');

    expect(storage.save).toHaveBeenCalledWith('token', 'test-token');
  });
});
