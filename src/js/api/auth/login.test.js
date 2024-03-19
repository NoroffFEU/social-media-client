import { login } from "./login";
import { LocalStorageMock } from "../../mocks/localStorageMock";

const test_username = "testuser";
const test_password = "testpassword";
const test_item = { username: "testuser", accessToken: "12345678" };

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    json: () =>
      Promise.resolve({ username: "testuser", accessToken: "12345678" }),
  });
}

global.localStorage = new LocalStorageMock();

describe("getToken", () => {
  it("Returns an access token when provided with valid username and password", async () => {
    localStorage.clear();
    global.fetch = jest.fn(() => fetchSuccess());
    const item = await login(test_username, test_password);
    const token = localStorage.getItem("token");
    const tokenFromMock = JSON.stringify(test_item.accessToken);
    expect(token).toEqual(tokenFromMock);
  });
});
