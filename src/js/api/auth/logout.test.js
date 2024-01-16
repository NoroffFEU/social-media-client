import { logout } from './logout';
import * as storage from '../../storage/index.js'; // Adjust the path as needed

jest.mock('../../storage/index.js');

describe('logout function', () => {
  beforeEach(() => {
    storage.remove.mockClear();
  });

  it('should clear token on logout', () => {
    logout();

    expect(storage.remove).toHaveBeenCalledWith('token');
  });
});
