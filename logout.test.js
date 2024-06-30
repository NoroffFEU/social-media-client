import { logout } from './src/js/api/auth/logout.js';
const localStorageMock = {
  removeItem: jest.fn(),
  setItem: jest.fn(),
  getItem: jest.fn().mockReturnValue(null),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

describe('Logout Functionality', () => {
  beforeEach(() => {
    localStorageMock.removeItem.mockClear();
  });

  test('should clear token and profile from localStorage on logout', () => {
    logout();

    expect(localStorageMock.removeItem).toHaveBeenCalledWith('token');
    expect(localStorageMock.removeItem).toHaveBeenCalledWith('profile');

    expect(localStorageMock.removeItem).toHaveBeenCalledTimes(2);
  });
});
