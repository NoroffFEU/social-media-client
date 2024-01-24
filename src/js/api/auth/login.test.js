import { login } from "./login.js";
import localStorageMock from "../../mocks/LocalStorage.mock.js";

//Save token

global.localStorage = localStorageMock;

describe("LocalStorageMock", () => {
  it("allows for mock call detection on storage methods", () => {
    localStorage.setItem("test", "hello world");
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});

//Call fetch

describe("login function", () => {
  it("should call fetch", async () => {
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: jest.fn().mockResolvedValue({}),
      }),
    );
    global.fetch = mockFetch;
    await login("linda@stud.noroff.no", "Test1234");
    expect(mockFetch).toHaveBeenCalled();
  });
});
