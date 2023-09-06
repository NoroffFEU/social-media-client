import { logout } from '../listeners/auth/logout';

// Mock localStorage
global.localStorage = {
  removeItem: jest.fn(),
};

describe('logout function', () => {
  it('should remove access token from localStorage', () => {
    logout();

    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
  });
});