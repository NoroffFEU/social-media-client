/* eslint-disable no-undef */
import { login } from './login';

const localStorageMock = {
  setItem: jest.fn(),
};

global.localStorage = localStorageMock;

global.fetch = jest.fn().mockResolvedValue({
  ok: true,
  json: () => Promise.resolve({ accessToken: 'fakeToken' }),
});

describe('login', () => {
  it('logs in the user and removes the token from localStorage', async () => {
    await login('something@gmail.no', '1234');

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'token',
      JSON.stringify('fakeToken'),
    );
  });
});
