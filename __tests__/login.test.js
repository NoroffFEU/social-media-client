import { login } from '../src/js/api/auth/login';
import { LocalStorageMock } from '../src/js/storage/localStorageMock';

global.localStorage = new LocalStorageMock();

const TEST_EMAIL = 'karla@noroff.no';
const TEST_PSW = 'karla123';
const TEST_TOKEN = 'asdfghjklzxcvbnmqwertyuiop';

const BAD_TEST_EMAIL = 'karla@hotmail.com';
const BAD_TEST_PSW = 'psw';

const data = { email: TEST_EMAIL, password: TEST_PSW, token: TEST_TOKEN };

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'fetch is OK',
    json: () => Promise.resolve(data),
  });
}

function fetchFailed() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: 'Unauthorized response',
  });
}

describe('login', () => {
  it('Succesfully logs user in', async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const user = await login(TEST_EMAIL, TEST_PSW);
    global.localStorage.setItem('token', TEST_TOKEN);
    expect(user).toEqual(data);
    expect(user.token).toEqual(global.localStorage.getItem('token'));
  });

  it('Fails to login user', async () => {
    global.fetch = jest.fn(() => fetchFailed());
    await expect(login(BAD_TEST_EMAIL, BAD_TEST_PSW)).rejects.toThrow(
      'Unauthorized'
    );
  });
});
