import { logout } from './logout';
import { remove } from '../../storage';

jest.mock('../../storage', () => ({
  ...jest.requireActual('../../storage'),
  remove: jest.fn(),
}));

describe('logout function test', () => {
  it('should remove token from browser storage', () => {
    logout();
    expect(remove).toHaveBeenCalledWith('token');
  });
});
