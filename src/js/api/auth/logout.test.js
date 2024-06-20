import { logout } from './logout';

// Mocking the localstorage remove func
const localStorageMock = {
  removeItem: jest.fn(),
};

/// Assignning localStorageMock to the actual localstorage
global.localStorage = localStorageMock;

describe('logging out', () => {
  beforeEach(() => {
    // Clearing the local storage mock before running the test
    jest.clearAllMocks();
  });

  it('logsout the user and removes the token from localStorage', () => {
    // Calling the logout function
    logout();

    // Expecting removal of the token from localStorage
    expect(localStorage.removeItem).toHaveBeenCalledWith('token');

    // Expecting removal of the profile from localStorage
    expect(localStorage.removeItem).toHaveBeenCalledWith('profile');
  });
});
