// logout.test.js

const logout = require('./logout');

describe('logout function', () => {
  beforeEach(() => {
    // Set up a mock localStorage before each test
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
    };
    global.localStorage = localStorageMock;
  });

  it('should clear the token from local storage', () => {
    // Set a token in local storage before calling the logout function
    localStorage.setItem('token', 'exampleToken');

    // Call the logout function
    logout();

    // Check if removeItem was called with the correct key
    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
  });

  it('should not throw an error if token is not in local storage', () => {
    // Call the logout function without setting a token in local storage
    logout();

    // Check if removeItem was not called
    expect(localStorage.removeItem).not.toHaveBeenCalled();
  });
});
