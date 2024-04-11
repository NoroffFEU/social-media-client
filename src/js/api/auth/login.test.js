import { login } from "../auth/login.js";

function FetchMock() {
  return jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ accessToken: "accessToken" }),
      statusText: "OK",
    }),
  );
}

function LocalStorageMock() {
  let store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
  };
}

beforeEach(() => {
  global.fetch = FetchMock();
  global.localStorage = LocalStorageMock();
});

afterEach(() => {
  global.fetch.mockRestore();
  global.localStorage.clear();
});

it("Stores a token in localStorage", async () => {
  const email = "mail@test.com";
  const password = "PassW0rd!";

  await login(email, password);

  const token = JSON.parse(localStorage.getItem("token"));
  expect(token).toBe("accessToken");
});
