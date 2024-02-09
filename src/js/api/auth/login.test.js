import { login } from "./login.js";
import StorageMock from "../../jest-mock/storage-mock.js";

// class StorageMock {
//   constructor() {
//     this.store = {};

//     this.setItem = jest.fn((key, value) => {
//       this.store[key] = value.toString();
//     });

//     this.getItem = jest.fn((key) => {
//       return this.store[key] || null;
//     });

//     this.removeItem = jest.fn((key) => {
//       delete this.store[key];
//     });

//     this.clear = jest.fn(() => {
//       this.store = {};
//     });

//     this.key = jest.fn((index) => {
//       return Object.keys(this.store)[index] || null;
//     });
//   }

//   get length() {
//     return Object.keys(this.store).length;
//   }
// }

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
    const fakeApiPath = "index.html";

    await login(email, password, fakeApiPath);

    // Assertions using the mocked functions
    expect(mockHeaders).toHaveBeenCalledWith("application/json");
    expect(mockSave).toHaveBeenCalledWith("token", "some-token"); // Replace with expected token
    expect(mockSave).toHaveBeenCalledWith("profile", {
      /* profile data */
    });
  });
});

// // Import the login function
// import { login } from "../../api/auth/login.js";

// // Import the StorageMock class
// import StorageMock from "../../jest-mock/storage-mock.js";

// // Mock the headers module
// jest.mock("../headers.js", () => ({
//   headers: jest.fn((contentType) => ({ "Content-Type": contentType })),
// }));

// describe("Login Function", () => {
//   // Mocked versions of the imported functions
//   const mockFetch = jest.fn();
//   const mockSave = jest.fn();

//   beforeAll(() => {
//     // Mock the global fetch function
//     global.fetch = mockFetch;

//     // Mock the global localStorage
//     global.localStorage = new StorageMock();

//     // Mock the save function from the storage module
//     jest.mock("../../jest-mock/storage-mock.js", () => ({
//       save: mockSave,
//     }));
//   });

//   beforeEach(() => {
//     // Reset mock function mocks before each test
//     mockFetch.mockReset();
//     mockSave.mockReset();
//   });

//   it("should store token and profile on successful login", async () => {
//     // Mock successful fetch response
//     mockFetch.mockResolvedValue({
//       ok: true,
//       json: () => Promise.resolve({ accessToken: "some-token", /* profile data */ }),
//     });

//     // Call the login function with mocked dependencies
//     await login("test@example.com", "password");

//     // Assertions using the mocked functions
//     expect(mockFetch).toHaveBeenCalledWith(
//       expect.stringContaining("/social/auth/login"),
//       expect.objectContaining({
//         method: "post",
//         body: JSON.stringify({ email: "test@example.com", password: "password" }),
//         headers: { "Content-Type": "application/json" },
//       })
//     );
//     expect(mockSave).toHaveBeenCalledWith("token", "some-token");
//     expect(mockSave).toHaveBeenCalledWith("profile", {
//       /* profile data */
//     });
//   });

//   it("should throw an error on unsuccessful login", async () => {
//     // Mock unsuccessful fetch response
//     mockFetch.mockResolvedValue({
//       ok: false,
//       statusText: "Unauthorized",
//     });

//     // Call the login function with mocked dependencies
//     await expect(login("test@example.com", "password")).rejects.toThrowError("Unauthorized");
//   });

//   // Add more test cases as needed

//   afterAll(() => {
//     // Restore the original fetch function after all tests
//     delete global.fetch;
//   });
// });
