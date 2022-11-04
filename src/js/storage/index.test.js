import { login } from '../api/auth/login.js';
import { createPost } from '../api/posts/create.js';
import { save, load, remove } from '../storage/index.js';

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

const validLoginCredentials = {
  email: 'tomhardy@noroff.no',
  password: '1234512345',
};

const postItem = {
  title: 'Title',
  body: 'Body text',
  media: 'https://picsum.photos/id/237/200/300',
  tags: ['example-tag'],
};

function fetchSuccess(status = 200) {
  return Promise.resolve({
    ok: true,
    status,
    json: () => Promise.resolve(validLoginCredentials),
  });
}

function createPostSuccess(status = 201) {
  return Promise.resolve({
    ok: true,
    status,
    json: () => Promise.resolve(postItem),
  });
}

describe('login', () => {
  it('Successful login', async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const item = await login();
    expect(item).toEqual(validLoginCredentials);
  });
});

describe('Token in localstorage', () => {
  it('Save array to localStorage', () => {
    const key = 'token';
    const value = ['email', 'password'];
    const serializedValue = JSON.stringify(value);
    save(key, value);
    expect(localStorage.getItem(key)).toEqual(serializedValue);
  });

  it('Loads array from local storage', () => {
    const key = 'token';
    const value = ['email', 'password'];
    save(key, value);
    expect(load(key)).toEqual(value);
  });

  //   it('Removes array from storage', () => {
  //     const key = 'token';
  //     const value = ['email', 'password'];
  //     save(key, value);
  //     expect(load(key)).toEqual(value);
  //     remove(key);
  //     expect(load(key)).toEqual(null);
  //   });
});

describe('Log out user by removing token', () => {
  it('Removes array from storage', () => {
    const key = 'token';
    const value = ['email', 'password'];
    save(key, value);
    expect(load(key)).toEqual(value);
    remove(key);
    expect(load(key)).toEqual(null);
  });
});

describe('Create post', () => {
  it('creates successfull post', async () => {
    global.fetch = jest.fn(() => createPostSuccess());
    const item = await createPost();
    expect(item).toEqual(postItem);
  });
});
