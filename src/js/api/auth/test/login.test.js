import { login } from "../login";
import { localStorageMock } from "../test/mock/localStorage.mock";


// Mocks and constants
jest.mock("../test/mock/localStorage.mock"); 
const validEmail = "victoria@stud.noroff.no";
const validPassword = "password";
const mockResponse = {
  name: "victoria",
  email: validEmail,
  accessToken: "12345",
};

describe("login", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    global.fetch = jest.fn(); 
    global.localStorage = localStorageMock;
  });

  afterEach(() => {
    global.fetch = originalFetch; 
  });

  it("stores a valid access token in local storage and returns a valid response object", async () => {
   
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse), 
    });

    const response = await login(validEmail, validPassword);
    
    expect(global.fetch).toHaveBeenCalledWith(expect.any(String), expect.any(Object));

    // Verify that the token was stored in localStorage
    expect(JSON.parse(localStorage.getItem("token"))).toEqual(mockResponse.accessToken);

    // Verify the response object
    expect(response).toEqual(mockResponse);
  });

  it("throws an error message if login is invalid", async () => {
    // Mock the fetch response to return an error response
    global.fetch.mockResolvedValueOnce({
      ok: false,
      statusText: "Invalid login",
    });

    // Use async/await and expect.rejects.toThrow to handle the error
    await expect(login(validEmail, validPassword)).rejects.toThrow("Invalid login");
  });
});
