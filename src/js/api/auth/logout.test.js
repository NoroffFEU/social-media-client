import { logout } from './logout';
import { remove } from '../../storage/index.js';

jest.mock('../../storage/index.js', () => ({
  remove: jest.fn(),
}));

describe('logout', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should remove token and profile from localStorage', () => {
    logout();

    expect(remove).toHaveBeenCalledWith('token');
    expect(remove).toHaveBeenCalledWith('profile');
  });
});
