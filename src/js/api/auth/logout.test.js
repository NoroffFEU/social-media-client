import { logout } from "./logout";
import mockLocalStorage from "../../storage/mockLocalStorage";
import * as storage from "../../storage/index";

//Token info
const TOKEN_KEY = "token";
const TOKEN_VALUE = "abcdef";

//MOCKSTORAGE
beforeAll(() => {
  global.localStorage = new mockLocalStorage();
});

/*
   
//mock failure function
function failFetch(statusCode = 404, status = "Not Found") {
    return Promise.resolve({
        ok: false,
        statusCode,
        status,
    });
}*/

describe("logout", () => {
  it("clears the token from browser storage", () => {
    storage.save(TOKEN_KEY, TOKEN_VALUE);
    expect(storage.load(TOKEN_KEY)).toEqual(TOKEN_VALUE);
    logout();
    expect(storage.load(TOKEN_KEY)).toEqual(null);
  });
});
