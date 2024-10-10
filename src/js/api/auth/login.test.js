import { login } from './login';
import { save } from '../../storage';
import { headers } from '../headers';

jest.mock('../../storage/index', () => ({
  save: jest.fn(),
}));

jest.mock('../headers', () => ({
  headers: jest.fn(() => ({ 'Content-Type': 'application/json' })),
}));

describe('login function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should save the token and profile when login is successful', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({ accessToken: '12345', name: 'Ukonu Idika' }),
      })
    );

    const profile = await login('valid@stud.noroff.no', 'password');

    expect(save).toHaveBeenCalledWith('token', '12345');
    expect(save).toHaveBeenCalledWith('profile', { name: 'Ukonu Idika' });
    expect(profile).toEqual({ name: 'Ukonu Idika' });
    expect(headers).toHaveBeenCalledWith('application/json');
  });

  test('should throw an error when login fails', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Unauthorized',
      })
    );

    await expect(
      login('invalid@example.com', 'wrong-password')
    ).rejects.toThrow('Unauthorized');

    expect(save).not.toHaveBeenCalled();
  });
});
