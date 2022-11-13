import { login } from "./login";
import { LocalStorageMock } from "../../mocks/storage";
import { fetchSuccess, fetchUnauthorized } from "../../mocks/fetch";

global.localStorage = new LocalStorageMock();

const TEST_EMAIL = "jester@noroff.no";
const TEST_PASSWORD = "PASSWORD";
const TEST_SUCCESS_RESPONSE = {
  name: "Jester",
  email: "jester@noroff.no",
  banner: null,
  avatar:
    "https://cdn.pixabay.com/photo/2016/03/31/20/07/bells-1295520_960_720.png",
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5c....",
};

describe("login", () => {
  it("Returns a valid access token in local storage and valid response object", async () => {
    global.fetch = jest.fn(() => fetchSuccess(TEST_SUCCESS_RESPONSE));
    //login removes the accessToken from test object
    const expectedToken = TEST_SUCCESS_RESPONSE.accessToken;
    const response = await login(TEST_EMAIL, TEST_PASSWORD);
    const storedToken = JSON.parse(localStorage.getItem("token"));
    expect(storedToken).toEqual(expectedToken);
    expect(response).toEqual(TEST_SUCCESS_RESPONSE);
  });

  it("Throws error message on invalid details", async () => {
    global.fetch = jest.fn(() => fetchUnauthorized());
    await expect(login(TEST_EMAIL, TEST_PASSWORD)).rejects.toThrow(
      "Unauthorized"
    );
  });
});
