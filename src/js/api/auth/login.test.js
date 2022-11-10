import { login } from './login';

const EMAIL = 'mona.test@noroff.no';
const BAD_EMAIL = 'bad123@mail.no';
const PASSWORD = '123456789';
const TOKEN = 'abc123defg';

const user = {
  name: 'Mona',
  email: EMAIL,
};

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

function loginSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'OK',
    json: () => Promise.resolve({ ...user, TOKEN }),
  });
}

function loginFailure() {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: 'Invalid credentials',
  });
}

describe('login', () => {
  it('returns a valid token when provided with valid credentials', async () => {
    global.fetch = jest.fn(() => loginSuccess());
    const profile = await login(EMAIL, PASSWORD);
    expect(EMAIL).toMatch('@noroff.no');
    expect(PASSWORD).toMatch('123456789');
    expect(profile.TOKEN).toEqual(TOKEN);
  });

  it('throws an error when provided with not valid credentials', async () => {
    global.fetch = jest.fn(() => loginFailure());
    await expect(login(BAD_EMAIL, PASSWORD)).rejects.toThrow(
      'Invalid credentials'
    );
  });
});
