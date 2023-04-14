import { login } from "../api/auth/login";
import { localStorageMock } from "./localStorageMock";

global.localStorage = localStorageMock;

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        accessToken: "mock-token",
      }),
  });
}

describe("login", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it("fetches and stores an access token in localStorage", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const response = await login("email", "password");
    expect(response).toBeDefined();
    //   check that there is a token is stored in local storage
    expect(localStorage.getItem("token")).toBeDefined();
    //   check that token in storage matches token from fetchSuccess
    expect(JSON.parse(localStorage.getItem("token"))).toEqual("mock-token");
  });
});
