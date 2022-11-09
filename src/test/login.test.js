import { login } from "../js/api/auth/login";
import { index } from "../test/localstorage.test";

// Correct login credentials.

const email = "test@noroff.no";
const password = "testpassword";
const token = "abcd123456789";

// Wrong login credentials.

const fakeEmail = "test@gmail.com";
const fakePassword = "wrongpassword";

function PostSuccess() {
  return Promise.resolve({
    ok: true,
    status: 201,
    statusText: "OK",
    json: () => Promise.resolve({ email, password, token }),
  });
}

function PostFailure() {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: "Not Found",
  });
}

describe("Test Login functionality", () => {
  it("Logs user in when the login was successful", async () => {
    global.fetch = jest.fn(() => PostSuccess());
    const result = await login(email, password);
    expect(email).toMatch("test@noroff.no");
    expect(password).toMatch("testpassword");
    expect(result.token).toEqual(token);
  });
  it("Returns a Error when login is unsuccessful", async () => {
    global.fetch = jest.fn(() => PostFailure());
    await expect(login(fakeEmail, fakePassword)).rejects.toThrow("Not Found");
  });
});
