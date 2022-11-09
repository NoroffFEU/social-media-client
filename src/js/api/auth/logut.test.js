import { logout } from './logout.js';

const TEST_EMAIL = 'testing@stud.noroff.no';
const TEST_PASSWORD = 'Password10';
const TEST_TOKEN = 'sadasdfdsf324223';
const TEST_LOGIN = {
  email: TEST_EMAIL,
  password: TEST_PASSWORD,
  accessToken: TEST_TOKEN,
};

// Created a fake LocalStorage to be using for unit testing simulation.

class LocalStorageFakeTest {
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

global.localStorage = new LocalStorageFakeTest();

describe('logout', () => {
  it('Returns a valid access token in local storage and valid response object', () => {
    localStorage.setItem('profile', JSON.stringify(TEST_LOGIN));
    localStorage.setItem('token', JSON.stringify(TEST_TOKEN));
    logout();
    expect(localStorage.getItem('profile')).toBeNull();
    expect(localStorage.getItem('token')).toBeNull();
  });
});
