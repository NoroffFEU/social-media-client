import { login } from "../auth/login";
import { LocalStorageMock } from "../../storage/localStorageMock";

global.localStorage = new LocalStorageMock();

const validEmail = "email@stud.noroff.no";
const invalidEmail = "email@bob.no";
const password = "BobIsYourUNcl3";

const userProfile = {
  name: "Bob Frida",
  email: validEmail,
  accessToken: "BoBFridaRules123456789",
};

/**
 * Mock fetch function that fails
 * @returns {Promise<Awaited<{statusText: string, ok: boolean, status: number}>>}
 */
function fetchFailure() {
  return Promise.resolve({
    status: 404,
    ok: false,
    statusText: "Invalid credentials",
  });
}

/**
 * A Mock returns successfully
 * @returns {Promise<Awaited<{statusText: string, json: (function(): Promise<Awaited<{name: string, accessToken: string, email: string}>>), ok: boolean, status: number}>>}
 */
function fetchSuccess() {
  return Promise.resolve({
    status: 200,
    ok: true,
    statusText: "Everything successful",
    json: () => Promise.resolve(userProfile),
  });
}

/**
 *
 */
describe("Login", () => {
  /**
   *
   */
  it("Returns a valid token when given valid credentials", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const data = await login(validEmail, password);

    expect(data).toEqual(userProfile);
  });

  /**
   *
   */
  it("Returns an error when given with invalid credentials", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    await expect(login(invalidEmail, password)).rejects.toThrow(
      "Invalid credentials",
    );
  });
});
