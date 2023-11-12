import { logout } from './logout';

global.localStorage = {
  removeItem: jest.fn(),
};

describe('logout funtion', () => {
  beforeEach(() => {
    global.localStorage.removeItem.mockClear();
  });

  it('should remove the token from the local storage', () => {
    logout();
    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
  });
});
