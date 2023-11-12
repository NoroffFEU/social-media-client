import { login } from './login';
import { headers } from '../headers';
import { save } from '../../storage';

// Mocking dependencies
jest.mock('../constants.js', () => ({ apiPath: '/mockedApiPath' }));
jest.mock('../headers.js', () => ({ headers: jest.fn() }));
jest.mock('../../storage/index.js', () => ({ save: jest.fn() }));

// Mocking the fetch function
global.fetch = jest.fn();

describe('login function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should login successfully and save token and profile', async () => {
    // Mocking a successful response
    global.fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ accessToken: 'mockedAccessToken', name: 'Ola Nordmann' }),
    });

    // Mocking the headers function
    headers.mockReturnValue({ 'Content-Type': 'application/json' });

    // Call the login function
    const result = await login('test@example.com', 'testPassword');

    // Assertions
    expect(global.fetch).toHaveBeenCalledWith('/mockedApiPath/social/auth/login', {
      method: 'post',
      body: JSON.stringify({ email: 'test@example.com', password: 'testPassword' }),
      headers: { 'Content-Type': 'application/json' },
    });

    expect(headers).toHaveBeenCalledWith('application/json');
    expect(save).toHaveBeenCalledWith('token', 'mockedAccessToken');
    expect(save).toHaveBeenCalledWith('profile', { name: 'Ola Nordmann' });
    expect(result).toEqual({ name: 'Ola Nordmann' });
  });

  it('should throw an error on failed login', async () => {
    // Mocking a failed response
    global.fetch.mockResolvedValue({
      ok: false,
      statusText: 'Unauthorized',
    });

    // Mocking the headers function
    headers.mockReturnValue({ 'Content-Type': 'application/json' });

    // Assertions
    await expect(login('test@example.com', 'testPassword')).rejects.toThrow('Unauthorized');

    expect(global.fetch).toHaveBeenCalledWith('/mockedApiPath/social/auth/login', {
      method: 'post',
      body: JSON.stringify({ email: 'test@example.com', password: 'testPassword' }),
      headers: { 'Content-Type': 'application/json' },
    });

    expect(headers).toHaveBeenCalledWith('application/json');
    expect(save).not.toHaveBeenCalled(); // No save should occur on failed login
  });
});
