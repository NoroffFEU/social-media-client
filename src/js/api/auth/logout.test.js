import { logout } from './logout';
import LocalStorageMock from '../Mocks/localstorage.mock.js';

global.localStorage = new LocalStorageMock();

const userProfile = {
  name: 'Marius',
  email: 'marius@stud.noroff.no',
};

const Token = '12345';

describe('logout', () => {
  it('removed from localstorage', () => {
    localStorage.setItem('profile', JSON.stringify(userProfile));
    localStorage.setItem('token', JSON.stringify(Token));
    logout();
    expect(localStorage.getItem('profile')).toEqual(null);
    expect(localStorage.getItem('token')).toEqual(null);
  });
});
