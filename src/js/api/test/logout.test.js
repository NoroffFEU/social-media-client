
import { logout } from '../auth/logout'; 
import { remove } from '../../storage/index'; 

// Mocking the remove function
jest.mock('../../storage/index', () => ({
  remove: jest.fn()
}));

describe('logout', () => {
  it('should call remove with "token" and "profile"', () => {
    logout();

    expect(remove).toHaveBeenCalledTimes(2);
    expect(remove).toHaveBeenCalledWith('token');
    expect(remove).toHaveBeenCalledWith('profile');
  });
});
