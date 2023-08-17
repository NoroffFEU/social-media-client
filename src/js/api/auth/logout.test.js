import { logout } from './logout';
import localStorageMock from '../../mocks/localStorage.mock';

const fakeToken = 'token';
const fakeProfile = {
  name: 'Student Name',
  email: 'student@stud.noroff.no',
};

beforeAll(() => {
  global.localStorage = new localStorageMock();
});

describe('logout function', () => {
  it('should clear the token from browser storage', () => {
    localStorage.setItem('token', JSON.stringify(fakeToken));
    localStorage.setItem('profile', JSON.stringify(fakeProfile));

    logout();

    expect(localStorage.getItem('token')).toBeNull();
    expect(localStorage.getItem('profile')).toBeNull();
  });
});
