import { login } from '../../../js/api/auth/login.js';
require('dotenv/config');

const name = process.env.LOGIN_NAME;
const email = process.env.LOGIN_USERNAME;
const password = process.env.LOGIN_PASSWORD;
const accessToken = process.env.LOAD_TOKEN;

describe('login function', () => {
  let mockFetchSuccess;
  let mockFetchFailure;

  beforeEach(() => {
    mockFetchSuccess = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        name: name,
        email: email,
        accessToken: accessToken,
      }),
    });

    mockFetchFailure = jest.fn().mockResolvedValue({
      ok: false,
      statusText: 'Unauthorized',
    });

    global.fetch = mockFetchSuccess;
    global.localStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Throws an error if a login attempt fails (wrong password or username)', async () => {
    global.fetch = mockFetchFailure;
    await expect(login('testitest@test.lo', 'test')).rejects.toThrow(
      'Unauthorized',
    );
  });

  it('Logs in and tests if profile is set to localstorage when logging in', async () => {
    const email = process.env.LOGIN_USERNAME;
    const password = process.env.LOGIN_PASSWORD;
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({
        name: name,
        email: email,
      }),
    };

    global.fetch = jest.fn().mockResolvedValue(mockResponse);
    const profile = await login(email, password);
    expect(profile).toEqual({
      name: name,
      email: email,
    });
    expect(global.localStorage.setItem).toHaveBeenCalledWith(
      'profile',
      JSON.stringify(profile),
    );
    expect(global.localStorage.getItem).toHaveBeenCalledWith('token');
  });
});
