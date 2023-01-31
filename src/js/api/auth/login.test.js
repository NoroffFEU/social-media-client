import { MockLocalStorage } from "../../storage/mockLocalStorage";
import { login } from "./login";

const CREDENTIALS = { email: "sarah@noroff.no", password: "12345" };
const ACCESSTOKEN = "ABCDE";
const PROFILE = {
  name: "Sarah",
  email: "sarah@noroff.no",
  accessToken: ACCESSTOKEN,
};

global.localStorage = new MockLocalStorage();

function validCredentials() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: jest.fn().mockResolvedValue(PROFILE),
  });
}

describe("login", () => {
  it("logs in the user with email and password, and stores a token in localstorage", async () => {
    global.localStorage.clear();
    global.fetch = jest.fn(() => validCredentials());
    await login(CREDENTIALS.email, CREDENTIALS.password);

    expect(JSON.parse(global.localStorage.getItem("token"))).toBe(ACCESSTOKEN);
    expect(JSON.parse(global.localStorage.getItem("profile"))).toEqual(PROFILE);
  });
});
