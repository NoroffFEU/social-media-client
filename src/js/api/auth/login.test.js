import { load } from "../../storage";
import { login } from "./login";
import "jest-localstorage-mock";

const GOOD_EMAIL = "IAmGod@noroff.no";
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
    json: () => Promise.resolve({ ...profile, accessToken: FAKETOKEN }),
  });
}

describe("login", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  describe("successful login", () => {
    it("returns a valid token when logging in and stores the token in local storage", async () => {
      global.fetch = jest.fn(() => fetchSuccess());
      await login(GOOD_EMAIL, FAKEPASSWORD);

      const storedToken = load("token");
      expect(storedToken).toEqual(FAKETOKEN);
    });
  });
});
