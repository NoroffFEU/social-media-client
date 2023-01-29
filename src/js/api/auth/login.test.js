import { login } from './login';

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

const MOCK_USERNAME = 'Vetle';
const MOCK_PASSWORD = '12345678';
const MOCK_EMAIL = 'vetle@.stud.noroff.no';
const MOCK_TOKEN = 'poiuqweporiuqweproiuqwerpi';

const MOCK_PROFILE = {
  name: MOCK_USERNAME,
  password: MOCK_PASSWORD,
  email: MOCK_EMAIL,
  accessToken: MOCK_TOKEN,
};

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(MOCK_PROFILE),
});

const mockFetchFailure = jest.fn().mockResolvedValue({
  ok: false,
});

describe('login', () => {
  it('stores a token on a valid login', async () => {
    global.fetch = mockFetchSuccess;
    global.localStorage.clear();
    const data = await login(MOCK_EMAIL, MOCK_PASSWORD);
    expect(data).toEqual(MOCK_PROFILE);
    var token = global.localStorage.getItem('token');
    expect(token).toMatch(MOCK_TOKEN);
  });

  it('does not store a token on a invalid login', async () => {
    global.fetch = mockFetchFailure;
    global.localStorage.clear();
    try {
      await login(MOCK_EMAIL, MOCK_PASSWORD);
    } catch (error) {
      //do nothing
    }
    var token = global.localStorage.getItem('token');
    expect(token).toEqual(null);
  });
});
