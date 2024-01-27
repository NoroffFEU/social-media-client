import { save, load } from '../../../storage';
import { logout } from '../logout';
import localStorageMock from './localStorage.mock';
import { tokenKey, token } from './testConstants';

global.localStorage = localStorageMock;

describe('localStorage', () => {
  it('should have token removed on logout', () => {
    save(tokenKey, token);
    // Check that token is stored before testing logout
    expect(load(tokenKey)).toEqual(token);
    logout();
    expect(localStorage.getItem(tokenKey)).toBeNull();
  });
});
