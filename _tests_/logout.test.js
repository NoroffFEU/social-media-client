/* eslint-disable no-undef */
import { logout } from '../src/js/api/auth/logout.js';
import { remove } from '../src/js/storage/remove.js';

jest.mock('../src/js/storage/remove.js', () => ({
  remove: jest.fn(),
}));

describe('logout function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('clears the token from browser storage', () => {
    logout();

    expect(remove).toHaveBeenCalledWith('token');
    expect(remove).toHaveBeenCalledWith('profile');
  });
});
