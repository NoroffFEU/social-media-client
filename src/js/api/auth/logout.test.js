import { logout } from './logout';
import { LocalStorageMock } from '../../storage/localStorageMock';

const accessToken = 'access';
const fakeProfile = {
  name: 'User Name',
  email: 'student@stud.noroff.no',
};

global.localStorage = new LocalStorageMock();

describe('logout', () => {
  it('Returns a valid token and removes from Localstorage', () => {
    localStorage.setItem('profile', JSON.stringify(fakeProfile));
    localStorage.setItem('token', JSON.stringify(accessToken));
    logout();
    expect(localStorage.getItem('profile')).toEqual(null);
    expect(localStorage.getItem('token')).toEqual(null);
  });
});
