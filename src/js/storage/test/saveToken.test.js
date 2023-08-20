// src/js/storage/tests/saveToken.test.js
import { saveToken } from '../../mock/saveToken';
import LocalStorageMock from '../../mock/localStorage.mock.js';

let originalLocalStorage;

beforeAll(() => {
  originalLocalStorage = global.localStorage;
  global.localStorage = new LocalStorageMock();
});

afterAll(() => {
  global.localStorage = originalLocalStorage;
});

const key = 'token';
const token = '12345';

describe('saveToken', () => {
  beforeEach(() => {
    localStorage.removeItem(token); // Clear the token before each test
  });

  it('saves a token in storage', () => {
    expect(localStorage.getItem(key)).toBeNull();
    saveToken(token);
    expect(JSON.parse(localStorage.getItem(key))).toEqual(token);
  });
});
