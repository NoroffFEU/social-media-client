import { logout } from './logout.js';
import { LocalStorageMock } from './storage.test';

global.localStorage = new LocalStorageMock();

const key = 'token';
const user = {
  name: 'testUser',
  email: 'testuser@noroff.no',
  banner: null,
  avatar:
    'https://publish.purewow.net/wp-content/uploads/sites/2/2021/03/smiling-dog-breeds-alaskan-malamute.jpg?fit=728%2C524',
};

describe('logout clear storage', () => {
  it('clears token and profile from localstorage', () => {
    localStorage.setItem('profile', JSON.stringify(user));
    localStorage.setItem('token', JSON.stringify(key));
    logout();
    expect(localStorage.getItem('profile')).toEqual(null);
    expect(localStorage.getItem('token')).toEqual(null);
  });
});
