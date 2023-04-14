import { login } from "./login";

describe("Test the login functionality", () => {
  let mockSetItem, mockLocalStorage;

  beforeEach(() => {
    mockSetItem = jest.fn();
    mockLocalStorage = { setItem: mockSetItem };
    global.localStorage = mockLocalStorage;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Fetch provides profile data and saves accesstoken to local storage", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            name: "test",
            email: "test@example.com",
            banner: "",
            avatar: "",
            accessToken: 1234,
          }),
      })
    );

    const profile = await login();

    expect(mockSetItem).toHaveBeenCalledWith("token", "1234");
    expect(profile).toEqual({
      name: "test",
      email: "test@example.com",
      banner: "",
      avatar: "",
    });
  });
});
