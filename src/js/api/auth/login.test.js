import { login } from "./login";
import { index } from "../../storage/storage.test"; //created a mock localStorage file just for this

//Valid data for the test
const USEREMAIL = "TestGuy56@noroff.no";
const USERPASSWORD = "Test1234";
const TEST_TOKEN = "dsbna99122jefdg23412om";
const user = {
  name: "Shaindal",
  email: USEREMAIL,
};
//Invalid data for the test
const WRONGEMAIL = "tester@testers.com";
const WRONGPASSWORD = "testmewrong";
const WRONG_DATA = { email: WRONGEMAIL, password: WRONGPASSWORD };

/**
 * This is a mock fetch function that will be successful
 * @param {number} status
 * @param {string} statusText
 *
 */
function fetchSuccess(
  status = 201,
  statusText = "Everything is A-OK, let's have some fun"
) {
  return Promise.resolve({
    ok: true,
    status,
    statusText,
    json: () => Promise.resolve({ ...user, TEST_TOKEN }),
  });
}

/**
 * This is a mock fetch function that will be unsuccessful
 * @param {number} status
 * @param {string} statusText
 *
 */
function fetchFailure(status = 401, statusText = "Invalid credentials") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("login", () => {
  it("Logs in successful when valid credentials is provided", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const data = await login(USEREMAIL, USERPASSWORD);
    expect(USEREMAIL).toMatch("@noroff.no");
    expect(USERPASSWORD).toHaveLength(8);
    expect(data.TEST_TOKEN).toEqual(TEST_TOKEN);
  });

  it("Does not log you in when credentials is not valid, gives an 401 error", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    await expect(login(WRONG_DATA)).rejects.toThrow("Invalid credentials");
  });
});
