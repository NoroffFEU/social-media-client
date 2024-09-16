import localStorageMock from "../../mocks/LocalStorage.mock.js";

global.localStorage = localStorageMock;

describe("LocalStorageMock", () => {
  it("allows for mock call detection on storage methods", () => {
    localStorage.removeItem("test");
    expect(localStorage.removeItem).toHaveBeenCalled();
  });
});
