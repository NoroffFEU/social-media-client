import { login } from '../js/api/auth/login';
import localStorageMock from './mocklocalstorage';
import { username, password, token } from './mockUser';

describe('login function success', () => {
  beforeEach(() => {
    const mockFetchSuccess = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        email: username,
        accessToken: token,
      }),
    });
    global.localStorage = localStorageMock;
    global.fetch = mockFetchSuccess;
  });

  it('returns user data when successfully logged in', async () => {
    const data = await login(username, password);
    expect(data).toHaveProperty('email', username);
  });

  it('stores accessToken in localStorage when successfully logged in', async () => {
    const data = await login(username, password);
    expect(localStorage.getItem('token')).toEqual(JSON.stringify(token));
  });
});

describe('login function failure', () => {
  beforeEach(() => {
    const mockFetchFailure = jest.fn().mockResolvedValue({
      ok: false,
      statusText: 'Unauthorized',
    });
    global.localStorage = localStorageMock;
    global.fetch = mockFetchFailure;
  });

  it('throws an error if login was not successfull', async () => {
    await expect(login('example@test.dev', 'testpassword')).rejects.toThrow(
      'Unauthorized',
    );
  });
});
