


import { login } from "./login";

const global = globalThis;

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

const mockEmail = "mockEmail@stud.noroff.no";
const mockPassword = "mockPassword123";

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue([{ token: "mock123Token456" }]),
});

global.fetch = mockFetchSuccess;
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


describe("login", () => {
  it("should fetch and store a valid access token", async () => {
    const data = await login(mockEmail, mockPassword);
    localStorage.setItem("token", data.token);
    expect(localStorage.getItem("token")).toBe(data.token);
  });
  it("Returns a valid item object when the token is a valid object", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const mockItem = await localStorageMock.getItem(1);
    expect(mockItem).toEqual(MOCK_TOKEN);
  });
  it("Returns undefined when an HTTP 404 error is recieved", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    const mockItem = await localStorageMock.getItem(1);
    expect(mockItem).toEqual(undefined)
  });
});
