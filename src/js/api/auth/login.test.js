import { login } from "./login";
// import { apiPath, headers } from '../constants';
// import { save } from '../../storage';

// jest.mock('../../storage'); // Mock the storage module for controlled testing

// describe('login function', () => {
//   const mockResponse = {
//     ok: true,
//     json: async () => ({
//       accessToken: 'test-token',
//       // Other profile details
//     }),
//   };

//   beforeEach(() => {
//     jest.clearAllMocks(); // Clear mocks before each test
//   });

//   it('stores the token and profile when given valid credentials', async () => {
//     const mockFetch = jest.fn().mockResolvedValueOnce(mockResponse);
//     global.fetch = mockFetch; // Override global fetch with mock

//     const email = 'test@example.com';
//     const password = 'password';

//     await login(email, password);

//     expect(mockFetch).toHaveBeenCalledTimes(1);
//     expect(mockFetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
//       method: 'post',
//       body: JSON.stringify({ email, password }),
//       headers: headers('application/json'),
//     });

//     expect(save).toHaveBeenCalledTimes(2);
//     expect(save).toHaveBeenCalledWith('token', 'test-token');
//     expect(save).toHaveBeenCalledWith('profile', {
//       // Other profile details (excluding accessToken)
//     });
//   });

//   it('throws an error when login is unsuccessful', async () => {
//     const mockErrorResponse = {
//       ok: false,
//       statusText: 'Unauthorized',
//     };
//     global.fetch = jest.fn().mockResolvedValueOnce(mockErrorResponse);

//     await expect(login('invalid@email', 'wrong-password')).rejects.toThrow(
//       'Unauthorized'
//     );
//   });
// });

jest.mock("path/to/headers"); // Replace with actual path
jest.mock("path/to/save"); // Replace with actual path

// Mocked versions of the imported functions
const mockHeaders = jest.fn();
const mockSave = jest.fn();

describe("login function isolation test", () => {
  // ...your test logic here...

  // Example test case (modify based on your requirements)
  it("should store token and profile on successful login", async () => {
    // Set up mock return values for mocked functions
    mockHeaders.mockReturnValue({ "Content-Type": "application/json" });
    mockSave.mockResolvedValue(); // Simulate successful storing

    // Call the login function with mocked dependencies
    const email = "test@example.com";
    const password = "password";
    const fakeApiPath = "https://api.example.com"; // Replace with your actual API path

    await login(email, password, fakeApiPath);

    // Assertions using the mocked functions
    expect(mockHeaders).toHaveBeenCalledWith("application/json");
    expect(mockSave).toHaveBeenCalledWith("token", "some-token"); // Replace with expected token
    expect(mockSave).toHaveBeenCalledWith("profile", {
      /* profile data */
    }); // Replace with expected profile data

    // ...other assertions based on your expected behavior...
  });
});
