import { logoutListener } from './logout';
import * as auth from '../../api/auth/index.js';
import { updateLoginVisibility } from '../../ui/auth.js';

// Mock the auth.logout and updateLoginVisibility functions
jest.mock('../../api/auth/index.js', () => ({
  logout: jest.fn(),
}));

jest.mock('../../ui/auth.js', () => ({
  updateLoginVisibility: jest.fn(),
}));

describe('logoutListener function', () => {
  // Mock global objects and methods
  let originalLocation;
  let mockAlert;

  beforeAll(() => {
    // Mock window.location.href
    originalLocation = window.location;
    delete window.location;
    window.location = { href: jest.fn() };

    // Mock window.alert
    mockAlert = jest.spyOn(window, 'alert').mockImplementation(jest.fn());
  });

  afterAll(() => {
    // Restore the original implementations
    window.location = originalLocation;
    mockAlert.mockRestore();
  });

  afterEach(() => {
    jest.clearAllMocks(); // Reset the mock calls after each test
  });

  it('should call auth.logout and updateLoginVisibility, then set location.href to "./"', () => {
    logoutListener();

    expect(auth.logout).toHaveBeenCalled();
    expect(updateLoginVisibility).toHaveBeenCalled();
    expect(window.location.href).toBe('./');
  });

  it('should alert "There was a problem logging out" if there is an error', () => {
    auth.logout.mockImplementationOnce(() => {
      throw new Error('Error logging out');
    });

    logoutListener();

    expect(mockAlert).toHaveBeenCalledWith('There was a problem logging out');
  });
});
