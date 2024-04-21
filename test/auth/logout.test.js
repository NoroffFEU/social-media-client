// auth.test.js
import { logout } from "../../src/js/api/auth/logout.js"; 
import * as storage from "../../src/js/storage/index"; 

// Mock the storage module
jest.mock("../../src/js/storage/index", () => ({
    save: jest.fn(),
    load: jest.fn(), 
    remove: jest.fn(),
}));

describe('logout', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('should call remove with the correct key', () => {
    // Call the logout function that we are testing
    logout();

    // Check if the remove function was called with the correct key
    expect(storage.remove).toHaveBeenCalledWith('token');
  });

  // Here you can add more tests for other logout behavior if necessary
});
