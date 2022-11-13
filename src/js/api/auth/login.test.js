import { login } from "./login";
import { LocalStorageMock } from "../../storage/storageMock";

global.localStorage = new LocalStorageMock();

const TEST_EMAIL = "MelZor72659@stud.noroff.no";
const TEST_PASSWORD = "password";
const TEST_USER = {
  name: "melisa_zorraindo",
  email: "MelZor72659@stud.noroff.no",
};
const TEST_PROFILE = JSON.stringify(TEST_USER);

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(TEST_USER),
  });
}

const TEST_EMAIL_FAIL = "melisa@gmail.com";
const TEST_PASSWORD_FAIL = "1234";

function fetchFailure(statusCode = 404, status = "Not Found") {
  return Promise.resolve({
    ok: false,
    statusCode,
    status,
  });
}

describe("login", () => {
  it("Returns a valid token when provided with valid credentials", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const user = await login(TEST_EMAIL, TEST_PASSWORD);
    const profile = JSON.stringify(user);
    expect(TEST_EMAIL).toMatch(/^[\w\-.]+@(stud.)?noroff.no$/);
    expect(TEST_PASSWORD).toHaveLength(8);
    expect(profile).toMatch(TEST_PROFILE);
  });

  it("Returns an HTTP 401 error when provided with invalid credentials", async () => {
    global.fetch = jest.fn(() => fetchFailure(401, "Unauthorized"));
    await expect(login(TEST_EMAIL_FAIL, TEST_PASSWORD_FAIL)).rejects.toThrow(
      new Error()
    );
  });

  it("Returns an HTTP 400 error when no data is provided", async () => {
    global.fetch = jest.fn(() => fetchFailure(401, ""));
    await expect(login()).rejects.toThrow(new Error());
  });
});
