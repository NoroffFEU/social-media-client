import { login } from "./login";

const global = globalThis;

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

const mockEmail = "mockEmail@stud.noroff.no";
const mockPassword = "mockPassword123";

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue([{ token: "mock123Token456" }]),
});

global.fetch = mockFetchSuccess;
global.localStorage = localStorageMock;

describe("login", () => {
  it("should fetch and store an access token", async () => {
    const data = await login(mockEmail, mockPassword);
    localStorage.setItem("token", data.token);
    expect(localStorage.getItem("token")).toBe(data.token);
  });
});
