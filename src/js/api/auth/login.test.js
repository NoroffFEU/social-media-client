import { login } from './login.js';
import { save } from '../../storage/index.js';

const mockFetchSuccess = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        accessToken: 'testToken',
        profileData: 'testProfile',
      }),
  }),
);

global.fetch = mockFetchSuccess;

jest.mock('../../storage/index.js', () => ({
  ...jest.requireActual('../../storage/index.js'),
  save: jest.fn(),
}));

describe('login function tests', () => {
  it('should save token to browser storage after successful login', async () => {
    const data = await login('test@email.com', 'testPassword');
    const accessToken = data.accessToken;
    console.log('accessToken:', accessToken);
    console.log('data:', data);
    expect(save).toHaveBeenCalledWith('token', 'testToken');
  });
});
