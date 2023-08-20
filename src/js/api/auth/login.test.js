import LocalStorageMock from "../mock/localStorage.mock.js";
import { login } from "./login.js";
import { save } from "../../storage";

const TEST_EMAIL = "sabKut73328@stud.noroff.no";
// const TEST_BAD_EMAIL = "sabKut@stud.noroff.no";
const TEST_PASSWORD = "kukuku16";

const TEST_PROFILE = {
  name: "Sabina",
  email: TEST_EMAIL,
  banner: null,
  avatar: "http://images.clipartpanda.com/summer-clip-art-9ipekbAiE.jpeg",
};

const key = "token";
const token = "123abc";

// function fetchSuccess() {
//   return Promise.resolve({
//     ok: true,
//     status: 200,
//     statusText: "OK",
//     json: () => Promise.resolve(TEST_PROFILE),
//   });
// }

// function fetchFailure(
//   status = 401,
//   statusText = "Either your username was not found or your password is incorrect"
// ) {
//   return Promise.resolve({
//     ok: false,
//     status,
//     statusText,
//   });
// }

beforeEach(() => {
  global.localStorage = new LocalStorageMock();
  localStorage.removeItem(token);
});

describe("login", () => {
  it("Returns an item object when provided with a valid email and password", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const item = await login(TEST_EMAIL, TEST_PASSWORD);
    expect(item).toEqual(TEST_PROFILE);
  });
  //   it("Returns an error message when provided with a invalid email or password", async () => {
  //     global.fetch = jest.fn(() => fetchFailure());
  //     const error = await login(TEST_PASSWORD);
  //     expect(error).toEqual(undefined);
  //   });
});

describe("save", () => {
  it("Saves token to local storage", () => {
    expect(localStorage.getItem(key)).toBeNull();
    save(key, token);
    expect(JSON.parse(localStorage.getItem(key))).toEqual(token);
  });
});
