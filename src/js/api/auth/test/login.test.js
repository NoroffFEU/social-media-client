import { login } from "../login";
import { localStorageMock } from "../test/mock/localStorage.mock";

// Mocks and constants
jest.mock("../test/mock/localStorage.mock");
const validEmail = "victoria@stud.noroff.no";
const validPassword = "validpass";
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

    const storedToken = JSON.parse(localStorageMock.getItem("token")); // Retrieve the stored token
    console.log("Stored token:", storedToken);
    console.log("Expected token:", mockResponse.accessToken);

    expect(storedToken).toEqual(mockResponse.accessToken);
    expect(response).toEqual(mockResponse);
  });

  it("throws an error message if login is invalid", async () => {
    // Mock the fetch response to return an error response
    global.fetch.mockResolvedValueOnce({
      ok: false,
      statusText: "Invalid login",
    });

    // Use async/await and expect.rejects.toThrow to handle the error
    await expect(login(validEmail, validPassword)).rejects.toThrow(
      "Invalid login"
    );
  });
});
