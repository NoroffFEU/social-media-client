import { logout } from "./logout";
import { remove } from "../../storage";

// Mocking the remove function
jest.mock('../../storage/index.js', () => ({ remove: jest.fn() }));

describe('logout function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should clear token and profile from storage', () => {
    // Call the logout function
    logout();

    // Assertions
    expect(remove).toHaveBeenCalledWith('token');
    expect(remove).toHaveBeenCalledWith('profile');
  });
});
