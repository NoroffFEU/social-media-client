import logout from "../../js/api/auth/logout.js";
import * as localStorage from '../../js/storage/remove.js';

jest.mock('../../js/storage/remove.js', () => ({
  remove: jest.fn(),
}));

describe('logout function', () => {
  test('removes token and profile from local storage', () => {
    // Call the logout function
    logout();

    expect(localStorage.remove).toHaveBeenCalledWith('token');
    expect(localStorage.remove).toHaveBeenCalledWith('profile');
  });
});