import { logout } from '../src/js/api/auth/logout';
import { LocalStorageMock } from '../src/js/storage/localStorageMock';

global.localStorage = new LocalStorageMock();

const TEST_TOKEN = 'asdfghjklqwertyuiopzxcvbnm';
const TEST_USER = { name: 'Karla', email: 'karla@noroff.no' };

describe('logout', () => {
  it('removes the access token from the local storage', () => {
    localStorage.setItem('user', JSON.stringify(TEST_USER));
    localStorage.setItem('token', JSON.stringify(TEST_TOKEN));
    logout();
    expect(localStorage.setItem('profile')).toEqual(undefined);
    expect(localStorage.setItem('token')).toEqual(undefined);
  });
});
