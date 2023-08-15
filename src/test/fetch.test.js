import * as auth from '../js/api/auth';

const TEST_ID = 1;
const TEST_BAD_ID = 'banana';
const TEST_STRING = 'Test';
const TEST_TOKEN = 'Token';
const TEST_PROFILE = {
  id: TEST_ID,
  name: TEST_STRING,
  accessToken: TEST_TOKEN,
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
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

globalThis.localStorage = new LocalStorageMock();

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'Ok',
    json: () => Promise.resolve(TEST_PROFILE),
  });
}

function fetchFailure(status = 404, statusText = 'Not Found') {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe('auth', () => {
  it('Saves valid token and profile to localStorage when provided with valid credentials', async () => {
    globalThis.fetch = jest.fn(() => fetchSuccess());
    await auth.login(TEST_ID, TEST_STRING);
    expect(JSON.parse(localStorage.getItem('token'))).toEqual(TEST_TOKEN);
    expect(JSON.parse(localStorage.getItem('profile'))).toEqual(TEST_PROFILE);
  });

  it('Clears token from localStorage', async () => {
    auth.logout();
    expect(localStorage.getItem('token')).toBeNull();
    expect(localStorage.getItem('profile')).toBeNull();
    localStorage.clear();
  });

  it("Throws error when provided with invalid credentials and doesn't save anything to localStorage", async () => {
    localStorage.clear();
    globalThis.fetch = jest.fn(() => fetchFailure());
    await expect(auth.login(TEST_BAD_ID, TEST_STRING)).rejects.toThrow();
    expect(localStorage.getItem('token')).toBeNull();
    expect(localStorage.getItem('profile')).toBeNull();
    localStorage.clear();
  });
});
