import { login } from "../js/api/auth/login";

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock;

const loginToken = "1337";

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({
    accessToken: loginToken,
  }),
});

global.fetch = mockFetchSuccess;

describe("login test", () => {
  it("should save the token in localstorage", async () => {
    await login("iversen@noroff.no", "password1234");
    expect(localStorageMock.setItem).toHaveBeenCalledWith("token", '"1337"');
  });
});

beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
});
