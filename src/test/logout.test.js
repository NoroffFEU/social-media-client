import { logout } from '../js/api/auth/logout';
import localStorageMock from './mocklocalstorage';
import { username, password, token } from './mockUser';

describe('logout function', () => {
  beforeEach(() => {
    global.localStorage = localStorageMock;
    localStorage.setItem('token', token);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('removes token from localstorage when logging out', async () => {
    logout();
    expect(localStorage.removeItem('token')).toEqual(undefined);
  });
});
