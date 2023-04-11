import { logout } from '../js/api/auth/logout.js';
import { save } from '../js/storage/save.js';
import { remove } from '../js/storage/remove.js';

import 'mock-local-storage';

describe('logout', () => {
  beforeEach(() => {
    save('token', 'mock-token');
  });

  afterEach(() => {
    remove('token');
  });

  it('should clear the token from local storage', () => {
    logout();

    expect(localStorage.getItem('token')).toBeNull();
  });
});
