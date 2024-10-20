import { logout } from '../js/api/auth/logout.js';
import { remove } from '../js/storage/remove.js';

jest.mock('../js/storage/remove.js', () => ({
  remove: jest.fn(),
}));

describe('logout', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('clears the token from browser when logged out', () => {
    logout();

    expect(remove).toHaveBeenCalledWith('token');
    expect(remove).toHaveBeenCalledWith('profile');
  });
});
