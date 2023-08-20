import { logout } from '../../api/auth/logout.js';
import { save } from '../save.js';
describe('logout function', () => {
  beforeEach(() => {
    save('token', 'mockToken');
    save('profile', 'mockProfile');
  });

  it('clears the token and profile from browser storage', () => {
    logout();
    expect(localStorage.getItem('token')).toBeNull();
    expect(localStorage.getItem('profile')).toBeNull();
  });
});
