// login.test.js
import { login } from '../auth/login';
import { save } from '../../storage/index';

// Mocking the save function
jest.mock('../../storage/index', () => ({
  save: jest.fn(),
  load: jest.fn().mockReturnValue('mocked-token') // Mock load
}));

// Mocking fetch
global.fetch = jest.fn();

fetch.mockImplementation(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: 'fake-token', userProfile: {} }),
    statusText: 'OK'
  })
);

describe('login', () => {
  beforeEach(() => {
    fetch.mockClear();
    save.mockClear();
  });

  it('should call fetch and save on successful login', async () => {
    const email = 'test@example.com';
    const password = 'password';

    const profile = await login(email, password);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(save).toHaveBeenCalledWith('token', 'fake-token');
    expect(save).toHaveBeenCalledWith('profile', expect.any(Object));
    expect(profile).toEqual(expect.objectContaining({ userProfile: {} }));
  });

});
