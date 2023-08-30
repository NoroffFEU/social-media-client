import  login  from '../listeners/auth/login';
import  apiPath  from '../api/constants';
import  headers  from '../api/headers';
import  save  from '../storage';

global.fetch = jest.fn();

global.localStorage = {
  setItem: jest.fn(),
};

describe('Login Test Suite', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('it should successfully login and save token and profile', async () => {
    const mockAccessToken = 'mockAccessToken';
    const mockProfile = { username: 'user123' };
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(mockProfile),
    };

    const exmapleUser = {
      email: "test@noc.com",
      password:"123456789"
    }
    
    fetch.mockResolvedValue(mockResponse);

    const result = await login(exmapleUser.email, exmapleUser.password);

    expect(result).toEqual(mockProfile);
    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: 'post',
      body: JSON.stringify({ email: exmapleUser.email, password: exmapleUser.password }),
      headers: headers('application/json'),
    });
    expect(localStorage.setItem).toHaveBeenCalledWith('token', JSON.stringify(mockAccessToken));
    expect(localStorage.setItem).toHaveBeenCalledWith('profile', JSON.stringify(mockProfile));
  });

  it('should throw an error if login fails', async () => {
    const mockErrorResponse = {
      ok: false,
      statusText: 'Unauthorized',
    };

    fetch.mockResolvedValue(mockErrorResponse);
    const exmapleUser = {
      email: "test@noc.com",
      password:"123456789"
    }
    await expect(login(exmapleUser.email, exmapleUser.password)).rejects.toThrowError('Unauthorized');
    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, expect.any(Object));
  });
});