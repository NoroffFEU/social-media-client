import { login } from "./login";

const GOOD_EMAIL = "IAmGod@noroff.no";
const BAD_EMAIL = "poo@pee.com";
const FAKEPASSWORD = "GoldSilver";
const FAKETOKEN = "xY7ZpR9qK1wJ2vT3uF8sG6hM4nL5pQ";

const profile = {
  name: "randomUser",
  email: GOOD_EMAIL,
};

function fetchSuccess(status = 201, statusText = "Success!") {
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

describe("login", () => {
  it("returns a valid token when logging in", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const data = await login(GOOD_EMAIL, FAKEPASSWORD);
    expect(GOOD_EMAIL).toMatch("@noroff.no");
    expect(FAKEPASSWORD.length).toBeGreaterThanOrEqual(8);
    expect(data.TOKEN).toEqual(FAKETOKEN);
  });

  it("throws an error when provided when login is invalid", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    await expect(login(BAD_EMAIL, FAKEPASSWORD)).rejects.toThrow(
      "Unsuccessful"
    );
  });
});
