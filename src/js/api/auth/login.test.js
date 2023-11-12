import { login } from "./login";

const email = "jeanett.kestner@stud.noroff.no";
const password = "Kestner12";
const accessToken = "localTokenMock";

const fetchMock = jest.fn().mockReturnValue({
  ok: true,
  json: jest.fn().mockReturnValue({
    name: "test",
    email: email,
    accessToken: accessToken,
  }),
});

const localStorageCheck = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageCheck;

const fetchMockFail = jest.fn().mockReturnValue({
  ok: false,
  statusText: "Unauthorized",
  statusCode: 401,
});

describe("login function", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("Calls API and stores values in the local storage", async () => {
    global.fetch = fetchMock;
    await login(email, password);
    expect(fetch).toBe(fetchMock);
    expect(localStorageCheck.setItem).toHaveBeenCalledWith(
      "token",
      '"localTokenMock"'
    );
    expect(localStorageCheck.setItem).toHaveBeenCalledWith(
      "profile",
      '{"name":"test","email":"jeanett.kestner@stud.noroff.no"}'
    );
  });

  it("Api call fails and does not store values in local storage", async () => {
    global.fetch = fetchMockFail;
    await expect(login(email, password)).rejects.toThrow("Unauthorized");
  });
});
