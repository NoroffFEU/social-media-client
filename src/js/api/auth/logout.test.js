import { logout } from './logout';

global.localStorage = {
  removeItem: jest.fn(),
};

describe('Logout Functionality Tests', () => {
  beforeEach(() => {
    global.localStorage.removeItem.mockClear();
  });

  it('should remove the token from the localStorage', () => {
    logout();
    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
  });
});
/* By running npm run test-unit in the terminal the tests for login.test.js and logout.test.js are running, and passing */
