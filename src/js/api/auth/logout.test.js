import { logout } from './logout';
import * as storage from '../../storage/index';

jest.mock('../../storage/index', () => ({
  remove: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Logout Function', () => {
  it('should remove the token and profile from storage', () => {
    logout();

    expect(storage.remove).toHaveBeenCalledWith('token');
    expect(storage.remove).toHaveBeenCalledWith('profile');
    expect(storage.remove).toHaveBeenCalledTimes(2);
  });
});
