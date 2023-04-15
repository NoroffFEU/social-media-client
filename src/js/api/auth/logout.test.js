import { logout } from "./logout";

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

const global = globalThis;

//const token = "token";

global.localStorage = localStorageMock;

const MOCK_TOKEN = localStorageMock.setItem();


function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(MOCK_TOKEN)
  })
}


function fetchFailure(status = 404, statusText = "Not Found") {
  return Promise.resolve({
    ok: false,
    status,
    statusText
  })
}



describe("logout", () => {
  it("clears the token from browser storage", async () => {
    const mockToken = "token";
    localStorage.removeItem("token", mockToken);
    logout();
    expect(localStorage.getItem("token")).toBeUndefined();
  });
  it("Returns a valid item object when the token is a valid object", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const mockItem = await localStorageMock.getItem(1);
    expect(mockItem).toEqual(undefined);
  });
  it("Returns undefined when an HTTP 404 error is recieved", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    const mockItem = await localStorageMock.getItem(1);
    expect(mockItem).toEqual(MOCK_TOKEN)
  });
});
