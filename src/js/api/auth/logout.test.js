import { logout } from './logout';

jest.mock('../../storage/index.js', () => ({
  remove: jest.fn(),
}));

describe('logout function', () => {
  it('clears the token and profile from browser storage', () => {
    logout();

    expect(require('../../storage/index.js').remove).toHaveBeenCalledWith('token');
    expect(require('../../storage/index.js').remove).toHaveBeenCalledWith('profile');
  });
});