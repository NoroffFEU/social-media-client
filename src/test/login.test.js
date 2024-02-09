import { login } from "../js/api/auth/login.js";

// Create Local Storage
// Source: https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests from vs_lala answer on Dec 25, 2019 at 10:01
let localStorageMock = (function () {
  let store = new Map();
  return {
    getItem(key) {
      return store.get(key);
    },

    setItem: function (key, value) {
      store.set(key, value);
    },

    clear: function () {
      store = new Map();
    },

    removeItem: function (key) {
      store.delete(key);
    },
  };
})();
Object.defineProperty(global, "localStorage", { value: localStorageMock });

let token = "ydgsaudgsa8732t87e823he87dh87d8";

const mockFetchSuccess = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: token }),
    statusText: "OK",
  })
);

global.fetch = mockFetchSuccess;

describe("Login a user with a correct token from localstorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("Stores the token from localStorage", async () => {
    const email = "login@noroff.no";
    const password = "Passw0rd";

    await login(email, password);

    const token = JSON.parse(localStorage.getItem("token"));
    expect(token).toBe(token);
  });
});

describe("Not login a user with a wrong token", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("Stores the token from localStorage", async () => {
    const email = "login@not.noroff.no";
    const password = "Passw0rd";

    await login(email, password);

    const token = JSON.parse(localStorage.getItem("token"));
    const wrongToken = "gjfgoijoifd";
    expect(token).not.toBe(wrongToken);
  });
});
