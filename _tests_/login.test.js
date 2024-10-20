/* eslint-disable no-undef */
import { login } from '../src/js/api/auth/login.js';
import { save } from '../src/js/storage/save.js';

jest.mock('../src/js/storage/save.js', () => ({
  save: jest.fn(),
}));

describe('login', () => {
  const mockEmail = 'test@example.com';
  const mockPassword = 'password123';
  const mockProfile = {
    name: 'John Doe',
    email: mockEmail,
    accessToken: 'abc123',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should successfully login and save the token and profile', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProfile),
      })
    );

    const result = await login(mockEmail, mockPassword);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('/social/auth/login'),
      expect.objectContaining({
        method: 'post',
        body: JSON.stringify({ email: mockEmail, password: mockPassword }),
        headers: expect.any(Object),
      })
    );

    expect(save).toHaveBeenCalledWith('token', 'abc123');
    expect(save).toHaveBeenCalledWith('profile', {
      name: 'John Doe',
      email: mockEmail,
    });

    expect(result).toEqual({
      name: 'John Doe',
      email: mockEmail,
    });
  });

  it('should throw an error if login fails', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Unauthorized',
      })
    );

    await expect(login(mockEmail, mockPassword)).rejects.toThrow(
      'Unauthorized'
    );

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(save).not.toHaveBeenCalled();
  });
});
