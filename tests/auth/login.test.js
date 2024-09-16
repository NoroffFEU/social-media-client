import { login } from "../../src/js/api/auth/login.js";
import localStorageMock from "../mocks/localStorage.js";
import mockFetchSuccess from "../mocks/fetchSuccess.js";

global.fetch = mockFetchSuccess({
  accessToken: 1234567890,
});

global.localStorage = localStorageMock;

describe("login", () => {
  it("should store a token in local storage after successful fetch", async () => {
    const email = "student@stud.noroff.no";
    const password = "1234567890";
    await login(email, password);
    expect(localStorage.getItem("token")).toBe("1234567890");
    localStorage.clear();
  });
});
