import { login } from "./login.js";
import localStorageMock from "../../mocks/localStorage.mock.js";
import USER_DATA from "../../mocks/user.mock.js";

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(USER_DATA),
});

beforeAll(() => {
  global.localStorage = localStorageMock;
  global.fetch = mockFetchSuccess;
});

describe("login", () => {
  it("returns a user object if the call is successful", async () => {
    const data = await login({});
    expect(data).toEqual(USER_DATA);
  });
  it("Adds an access token to local storage", async () => {
    await login({});
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "token",
      JSON.stringify(USER_DATA.accessToken),
    );
  });
});
