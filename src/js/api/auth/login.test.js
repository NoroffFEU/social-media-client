import { login } from "./login";
import { save, load } from "../../storage/index";

jest.mock("../../storage/index", () => ({
  save: jest.fn(),
  load: jest.fn(() => "mockToken"), // 🧪 Returner en fake token
}));

describe("login", () => {
  beforeEach(() => {
    save.mockClear();
    load.mockClear();
  });

  it("should store token and profile on successful login", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            accessToken: "123abc",
            name: "Mocky McMockface",
          }),
      }),
    );

    await login("test@email.com", "pass123");

    expect(save).toHaveBeenCalledWith("token", "123abc");
    expect(save).toHaveBeenCalledWith("profile", {
      name: "Mocky McMockface",
    });
  });
});
