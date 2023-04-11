import { login } from '../js/api/auth/login.js';

import 'mock-local-storage';

describe('login', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ accessToken: 'mock-token' }),
    });
  });

  afterEach(() => {
    global.fetch.mockClear();
    delete global.fetch();
    localStorage.clear();
  });

  it('stores a token when provided with valid credentials', async () => {
    const email = 'RobMar4444@stud.noroff.no';
    const password = 'robert1234';
    await login(email, password);
    expect(localStorage.getItem('token')).toBe('"mock-token"');
  });
});
