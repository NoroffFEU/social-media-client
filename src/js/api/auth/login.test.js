import { login } from './login.js';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        accessToken: 'test',
        name: 'test',
        email: 'test@noroff.no',
      }),
    status: 'OK',
  }),
);

global.localStorage = {
  setItem: jest.fn(function (key, value) {
    this[key] = value;
  }),
};

describe('Login Function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should login successfully and save token and profile in localstorage', async () => {
    const email = 'testaccount4567@stud.noroff.no';
    const password = 'Testaccount4567';

    await login(email, password);

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('/social/auth/login'),
      {
        method: 'post',
        body: JSON.stringify({ email, password }),
        headers: expect.any(Object),
      },
    );

    expect(localStorage.token).toEqual(JSON.stringify('test'));
    expect(localStorage.profile).toEqual(
      JSON.stringify({
        name: 'test',
        email: 'test@noroff.no',
      }),
    );
  });

  it('Should throw an error if the login fails', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Unauthorized',
      }),
    );

    const email = 'incorrectUser@stud.noroff,no';
    const password = 'incorrectUser';

    await expect(login(email, password)).rejects.toThrow('Unauthorized');
  });
});
