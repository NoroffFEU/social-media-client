import { logout } from './logout.js';
import { save } from '../../storage/save.js';

global.localStorage = {
  setItem: jest.fn(function (key, value) {
    this[key] = value;
  }),
  removeItem: jest.fn(function (key) {
    delete this[key];
  }),
};

describe('Logout Function', () => {
  it('Should remove token and profile from local storage', () => {
    save('token', 'test');
    save('profile', 'test');
    expect(localStorage.token).toEqual(JSON.stringify('test'));
    expect(localStorage.profile).toEqual(JSON.stringify('test'));
    logout();

    expect(localStorage.token).toBeUndefined();
    expect(localStorage.profile).toBeUndefined();
  });
});
