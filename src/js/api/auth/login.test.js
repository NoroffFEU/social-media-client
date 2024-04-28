import { login } from './login';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: 'mocked_access_token' }),
  })
);

jest.mock('../../storage/index.js', () => ({
  save: jest.fn(),
  load: jest.fn((key) => {
    if (key === 'token') {
      return 'mocked_token';
    }
    return null;
  }),
}));

describe('login function', () => {
  it('stores a token when provided with valid credentials', async () => {
    await login('test@example.com', 'password123');

    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('/social/auth/login'), {
      method: 'post',
      body: JSON.stringify({ email: 'test@example.com', password: 'password123' }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer mocked_token',
      },
    });
    expect(require('../../storage/index.js').save).toHaveBeenCalledWith('token', 'mocked_access_token');
  });
});