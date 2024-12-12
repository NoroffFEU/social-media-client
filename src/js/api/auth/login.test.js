import mockLocalStorage from "../../storage/mockLocalStorage";
import { login } from "./login.js";

import * as storage from "../../storage/index";

const TOKEN_KEY = "token";
const TOKEN_VALUE = "abcdef";

// User
const user = {
  accessToken: TOKEN_VALUE,
};

//MOCKSTORAGE
beforeAll(() => {
  global.localStorage = new mockLocalStorage();
  storage.remove(TOKEN_KEY);
});

// mock success function
function fetchSuccess(response) {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "All Good!",
    json: () => Promise.resolve(response),
  });
}

describe("login", () => {
  it("stores a token in local storage after performing a fetch", async () => {
    const email = "test@example.com";
    const password = "password";

    global.fetch = jest.fn(() => fetchSuccess(user));
    expect(storage.load(TOKEN_KEY)).toEqual(null);
    await login(email, password);
    expect(storage.load(TOKEN_KEY)).toEqual(TOKEN_VALUE);
  });
});

/*
//mock failure function
function failFetch(statusCode = 404, status = "Not Found") {
    return Promise.resolve({
        ok: false,
        statusCode,
        status,
    });
}
*/
