import { login } from "./login.js";

import storage from "./helpers/storage.js";

const profile = { name: "ole", accessToken: "oleole" };

global.localStorage = storage;

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        accessToken,
        ...profile,
      }),
    status: 200,
    statusText: "OK",
    ok: true,
  })
);

describe("login", () => {
  it("saves a token in localstorage", async () => {
    await login("bob", "password");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "token",
      profile.accessToken
    );
  });
});
