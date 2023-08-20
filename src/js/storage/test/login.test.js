// src/js/storage/tests/login.test.js
import { login } from '../../api/auth/login';
import { apiPath } from '../../api/constants.js';
import { save } from '../index.js';
import LocalStorageMock from '../../mock/localStorage.mock.js';

// Setup mock localStorage
beforeAll(() => {
  global.localStorage = new LocalStorageMock();
});

// Mocking fetch
global.fetch = jest.fn();
jest.mock('../index.js');

describe('login function', () => {
  beforeEach(() => {
    fetch.mockClear();
    save.mockClear();
    localStorage.clear(); // Ensure localStorage mock is clear before each test
  });

  it('should fetch and store a token in browser storage upon successful login', async () => {
    const mockToken = 'mockToken';
    const mockProfile = {
      accessToken: mockToken,
      name: 'John Doe',
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockProfile),
    });

    const result = await login('test@example.com', 'password');

    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: 'post',
      body: JSON.stringify({ email: 'test@example.com', password: 'password' }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    expect(save).toHaveBeenCalledWith('token', mockToken);
    expect(save).toHaveBeenCalledWith('profile', { name: 'John Doe' });

    expect(result).toEqual({ name: 'John Doe' });
  });

  it('should throw an error when the response is not ok', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Unauthorized',
    });

    await expect(login('test@example.com', 'wrongpassword')).rejects.toThrow(
      'Unauthorized'
    );
  });
});
