import { login } from "./login";
import "jest-localstorage-mock";

const GOOD_EMAIL = "IAmGod@noroff.no";
const BAD_EMAIL = "rofl@mao.com";
const FAKEPASSWORD = "GoldSilver";
const FAKETOKEN = "xY7ZpR9qK1wJ2vT3uF8sG6hM4nL5pQ";

const profile = {
  name: "randomUser",
  email: GOOD_EMAIL,
};

function fetchSuccess(status = 201, statusText = "Success") {
  return Promise.resolve({
    ok: true,
    status,
    statusText,
    json: () => Promise.resolve({ ...profile, TOKEN: FAKETOKEN }),
  });
}

function fetchFailure(status = 404, statusText = "Unsuccessful") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

function setTokenInLocalStorage(token) {
  localStorage.setItem("TOKEN", token);
}

describe("login", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  describe("successful login", () => {
    it("returns a valid token when logging in and stores the token in local storage", async () => {
      global.fetch = jest.fn(() => fetchSuccess());
      const data = await login(GOOD_EMAIL, FAKEPASSWORD);

      const storedToken = localStorage.getItem("TOKEN");
      expect(storedToken).toEqual(FAKETOKEN);
    });
  });

  describe("failed login", () => {
    it("throws an error when provided with invalid credentials", async () => {
      global.fetch = jest.fn(() => fetchFailure());
      await expect(login(BAD_EMAIL, FAKEPASSWORD)).rejects.toThrow(
        "Unsuccessful"
      );
    });
  });
});
