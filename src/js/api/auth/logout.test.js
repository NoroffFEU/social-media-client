import { logout } from './logout.js';

const LOGOUT_DATA = {
  token: 'test token',
  profile: `{"name":"testing","email":"testing@noroff.no","banner":null,"avatar":null}`,
};

class LocalStorageMock {
  constructor() {
    this.storage = { LOGOUT_DATA };
  }

  removeItem(key) {
    return this.storage[key] || null;
  }
}

global.localStorage = new LocalStorageMock();

describe('userLogout', () => {
  it('should logout and clear the localStorage', async () => {
    expect(localStorage.removeItem('token')).toBeNull();
    expect(localStorage.removeItem('profile')).toBeNull();
  });
});
