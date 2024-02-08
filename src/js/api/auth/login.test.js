import { login } from "./login.js";
import { headers } from "../headers.js";

class StorageMock {
  constructor() {
    this.store = {};

    this.setItem = jest.fn((key, value) => {
      this.store[key] = value.toString();
    });

    this.getItem = jest.fn((key) => {
      return this.store[key] || null;
    });

    this.removeItem = jest.fn((key) => {
      delete this.store[key];
    });

    this.clear = jest.fn(() => {
      this.store = {};
    });

    this.key = jest.fn((index) => {
      return Object.keys(this.store)[index] || null;
    });
  }

  get length() {
    return Object.keys(this.store).length;
  }
}

global.localStorage = new StorageMock();

// Mocked versions of the imported functions
const mockHeaders = jest.fn();
const mockSave = jest.fn();

describe("login function isolation test", () => {
  // Example test case (modify based on your requirements)
  it("should store token and profile on successful login", async () => {
    // Set up mock return values for mocked functions
    mockHeaders.mockReturnValue({ "Content-Type": "application/json" });
    mockSave.mockResolvedValue(); // Simulate successful storing

    // Call the login function with mocked dependencies
    const email = "steinnes@stud.noroff.no";
    const password = "12345678";
    const fakeApiPath = "https://api.example.com"; // Replace with your actual API path

    await login(email, password, fakeApiPath);

    // Assertions using the mocked functions
    expect(mockHeaders).toHaveBeenCalledWith("application/json");
    expect(mockSave).toHaveBeenCalledWith("token", "some-token"); // Replace with expected token
    expect(mockSave).toHaveBeenCalledWith("profile", {
      /* profile data */
    });
  });
});
