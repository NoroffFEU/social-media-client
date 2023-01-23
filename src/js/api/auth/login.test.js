import { login } from ".";
import storage from "../../storage/storageMock.js";

const email = "DanVie13513@stud.noroff.no";
const password = "password";
const accessToken = "apiegbapgiba4a3p5o4";

const user = {
  name: "example",
  email: email,
  banner: "",
  avatar: "",
  accessToken: accessToken,
};

global.localStorage = storage;

function fetchSuccess() {
  return Promise.resolve({
    json: () => Promise.resolve(user),
    status: 200,
    statusText: "OK",
    ok: true,
  });
}

describe("login", () => {
  it("stores a token when provided with valid credentials", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const profile = await login(email, password);
    expect(profile).toEqual(user);
    expect(localStorage.getItem("token")).toMatch(accessToken);
  });
});
