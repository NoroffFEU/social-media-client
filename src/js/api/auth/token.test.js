import { login } from './login';
import LocalStorageMock from '../Mocks/localstorage.mock.js';

const key = 'token';
const token = '12345';

beforeAll(() => {
  global.localStorage = new LocalStorageMock();
  localStorage.removeItem(token);
});

describe('saveToken', () => {
  it('saves a token in storage', () => {
    expect(localStorage.getItem(key)).toBeNull();
    login(token);
    expect(JSON.parse(localStorage.getItem(key))).toEqual(token);
  });
});
