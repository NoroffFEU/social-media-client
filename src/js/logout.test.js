const logout = require('./logout');

describe('logout function', () => {
  beforeEach(() => {
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
    };
    global.localStorage = localStorageMock;
  });

  it('should clear the token from local storage', () => {
    localStorage.setItem('token', 'exampleToken');

    logout();

    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
  });

  it('should not throw an error if token is not in local storage', () => {
    logout();

    expect(localStorage.removeItem).not.toHaveBeenCalled();
  });
});
