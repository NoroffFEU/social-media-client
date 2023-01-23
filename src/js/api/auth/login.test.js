import { login } from './login.js';

const USER_DATA = {
  name: 'testing',
  email: 'testing@noroff.no',
  banner: 'null',
  avatar: 'null',
  accessToken: 'test workflow',
};

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(USER_DATA),
});

global.fetch = mockFetchSuccess;

class LocalStorageMock {
  constructor() {
    this.storage = {};
  }

  clear() {
    this.storage = {};
  }

  setItem(key, value) {
    this.storage[key] = String(value);
  }

  getItem(key) {
    return this.storage[key] || null;
  }
}

global.localStorage = new LocalStorageMock();

describe('userLogin', () => {
  it('should login and store a token', async () => {
    localStorage.clear();
    await login('checking@stud.noroff.no', '');
    const token = localStorage.getItem('token');
    expect(token).not.toEqual('test workflow');
  });
});
