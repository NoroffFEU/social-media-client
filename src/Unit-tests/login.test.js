import { login } from "../js/api/auth/login.js";

const userEmail = "chrgro27584@stud.noroff.no";
const userPassword = "password";
const mockAccessToken = "localTokenMock";

const mockSuccessfulFetch = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({
    name: "test",
    email: userEmail,
    accessToken: mockAccessToken,
  }),
});

const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = mockLocalStorage;

const mockFailedFetch = jest.fn().mockResolvedValue({
  ok: false,
  statusText: "Unauthorized",
  statusCode: 401,
});

describe("login function", () => {
  beforeEach(() => {
    mockLocalStorage.clear();
    jest.clearAllMocks();  
  });

  it("calls API and stores values in local storage", async () => {
    global.fetch = mockSuccessfulFetch;
    await login(userEmail, userPassword);
    expect(global.fetch).toHaveBeenCalledWith(expect.any(String), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail, password: userPassword }),
    });
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith("token", mockAccessToken);
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith("profile", JSON.stringify({ name: "test", email: userEmail }));
  });

  it("API call fails and does not store values in local storage", async () => {
    global.fetch = mockFailedFetch;
    await expect(login(userEmail, userPassword)).rejects.toThrow("Unauthorized");
    expect(mockLocalStorage.setItem).not.toHaveBeenCalled();
  });

  it("handles network errors gracefully", async () => {
    const mockNetworkError = jest.fn().mockRejectedValue(new Error("Network Error"));
    global.fetch = mockNetworkError;
    await expect(login(userEmail, userPassword)).rejects.toThrow("Network Error");
    expect(mockLocalStorage.setItem).not.toHaveBeenCalled();
  });

  it("handles malformed responses", async () => {
    const mockMalformedFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(null),
    });
    global.fetch = mockMalformedFetch;
    await expect(login(userEmail, userPassword)).rejects.toThrow("Unexpected end of JSON input");
    expect(mockLocalStorage.setItem).not.toHaveBeenCalled();
  });
});