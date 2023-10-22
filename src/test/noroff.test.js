// The login function fetches and stores a token in the browser storage
// check that the storage function will work.
import { login } from "../js/api/auth/login";
import { logout } from "../js/api/auth/logout";

const tokenValue = "321";

const mockLocalStorage = {
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

let mochFetchResponse = {
  ok: true,
  json: async () => ({
    accessToken: tokenValue,
    name: "Ylva Lund",
  }),
};

global.fetch = jest.fn();

global.localStorage = mockLocalStorage;

describe("store the token", () => {
  afterEach(() => {
    fetch.mockClear();
  });

  fetch.mockResolvedValueOnce(mochFetchResponse);

  it("Should login and store token", async () => {
    // Login function should store the token in local storage and get the value from fetch.

    const testedProfile = await login("test@test.no", "socialNoroff");
    // Not sure if I need to wait for this...
    // expect(mockLocalStorage).toHaveBeenCalledWith("token", tokenValue);
    expect(testedProfile).toEqual({ name: "Ylva Lund" });
    expect(mockLocalStorage.setItem).toHaveBeenCalledTimes(2); // set token and profile
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith("token", '"321"');
  });

  it("Should remove tokens when logging out", () => {
    logout();

    expect(mockLocalStorage.removeItem).toHaveBeenCalledTimes(2);
    expect(mockLocalStorage.removeItem).toHaveBeenCalledWith("token");
    expect(mockLocalStorage.removeItem).toHaveBeenCalledWith("profile");
  });
});

// The logout function clears the token from the browser storage

// As the Node.js does not have a browser - we need to moch the storage...
