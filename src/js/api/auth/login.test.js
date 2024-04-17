import { login } from "./login";
import * as storage from "../../storage/index";

jest.mock("../../storage/index");

const token = "987";

//globally mocking the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: token }),
  }),
);

//test description and set up
//beforeEach  ensures that any existing data in the storage is cleared before each test
describe("testing login function", () => {
  beforeEach(() => {
    storage.remove();
  });

  //test case
  it("successfully stores the token in local storage", async () => {
    await login("userone@gmail.com", "password");

    expect(storage.save).toHaveBeenCalledWith("token", token);
  });
});
