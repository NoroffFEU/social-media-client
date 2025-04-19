import { login, logout } from '../src/js/api/auth/index.js';

describe('Auth API', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.resetAllMocks();
  });

  it('login() stores token on successful login', async () => {
    const fakeToken = 'abc123';
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ accessToken: fakeToken }),
    });

    await login('user@example.com', 'password');

    // New assertion: parse the stored JSON string before comparing
    const stored = localStorage.getItem('token');
    expect(JSON.parse(stored)).toBe(fakeToken);
  });

  it('logout() clears the token from localStorage', () => {
    localStorage.setItem('token', 'xyz');

    logout();

    expect(localStorage.getItem('token')).toBeNull();
  });
});
