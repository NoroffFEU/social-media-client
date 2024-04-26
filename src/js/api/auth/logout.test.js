import { logout } from './logout';

// Mocking the storage module
jest.mock('../../storage/index.js', () => ({
  remove: jest.fn(),
}));

describe('logout function', () => {
  it('clears the token and profile from browser storage', () => {
    // Call the logout function
    logout();

    // Expect the remove function to be called with the correct parameters
    expect(require('../../storage/index.js').remove).toHaveBeenCalledWith('token');
    expect(require('../../storage/index.js').remove).toHaveBeenCalledWith('profile');
  });
});
