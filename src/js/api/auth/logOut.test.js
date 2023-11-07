import { logout } from './logout.js';
import { remove } from '../../storage/index.js';

jest.mock('../../storage/index.js');

describe('logOut function', () => {
  it('should remove tokens', () => {
    logout();

    expect(remove).toHaveBeenCalledWith('token');
    expect(remove).toHaveBeenCalledWith('profile');
  });
});
