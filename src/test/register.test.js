import { register } from "../js/api/auth/register.js";
import { apiPath } from "../js/api/constants.js";

jest.mock("../js/storage/index.js", () => ({
  load: jest.fn().mockReturnValue("mockedToken"),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
    ok: true,
  }),
);

describe("register", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("registers a user successfully", async () => {
    const mockResponse = {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    };

    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
        ok: true,
      }),
    );

    const result = await register(
      "John Doe",
      "john.doe@example.com",
      "password123",
      "http://example.com/avatar.jpg",
    );

    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/register`, {
      method: "post",
      body: JSON.stringify({
        name: "John Doe",
        email: "john.doe@example.com",
        password: "password123",
        avatar: "http://example.com/avatar.jpg",
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer mockedToken",
      },
    });
  });
});
