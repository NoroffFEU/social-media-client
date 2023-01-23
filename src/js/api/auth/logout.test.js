import { logout } from './logout.js';

const LOGOUT_DATA = {
  token: 'test token',
  profile: `{"name":"testing","email":"testing@noroff.no","banner":null,"avatar":null}`,
};

class LocalStorageMock {
  constructor() {
    this.storage = { LOGOUT_DATA };
  }
}
global.localStorage = new LocalStorageMock();
