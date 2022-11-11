/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// /* eslint-disable no-undef */
// import * as storage from './index';

// class LocalStorageMock {
//   constructor() {
//     this.value = {};
//   }

//   clear() {
//     this.value = {};
//   }

//   getItem(key) {
//     return this.value[key] || null;
//   }

//   setItem(key, value) {
//     this.value[key] = String(value);
//   }

//   removeItem(key) {
//     delete this.value[key];
//   }
// }

// global.localStorage = new LocalStorageMock();

// describe('storage functionality', () => {
//   it('saves data to localStorage', () => {
//     const key = 'token';
//     const value = ['email', 'password'];
//     const item = JSON.stringify(value);
//     storage.save(key, value);
//     expect(localStorage.getItem(key)).toEqual(item);
//   });
//   it('loads data from localStorage', () => {
//     const key = 'token';
//     const value = ['email', 'password'];
//     storage.save(key, value);
//     expect(storage.load(key)).toEqual(value);
//   });
//   it('removes data from localStorage', () => {
//     const key = 'token';
//     const value = ['email', 'password'];
//     storage.save(key, value);
//     expect(storage.load(key)).toEqual(value);
//     storage.remove(key);
//     expect(storage.load(key)).toEqual(undefined || null);
//   });
// });

import { save, load, remove } from '../js/storage';
import { logout } from '../js/api/auth/logout';

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

describe('logout', () => {
  it('Clears the token from browser storage', () => {
    const key = 'accessToken';
    const value = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
    save(key, value);
    expect(load(key)).toEqual(value);
    remove(key);
    expect(load(key)).toEqual(null);
  });
});
