import { logout } from './logout';
import * as storage from '../../storage/index';

jest.mock('../../storage/index.js');

describe('logout', () => {
  beforeEach(() => {
    storage.remove.mockClear();
  });

  it('removes the token and profile from storage', () => {
    // Call the logout function which should invoke `remove` twice
    logout();

    // Check if `remove` was called with the correct keys
    expect(storage.remove).toHaveBeenCalledWith('token');
    expect(storage.remove).toHaveBeenCalledWith('profile');

    // Check if `remove` was called exactly two times
    expect(storage.remove).toHaveBeenCalledTimes(2);
  });
});
