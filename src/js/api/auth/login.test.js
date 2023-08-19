import LocalStorageMock from "../mock/localStorage.mock.js";
import { save } from "../../storage";

const key = "token";
const token = "123abc";

beforeAll(() => {
  global.localStorage = new LocalStorageMock();
  localStorage.removeItem(token);
});

describe("saveToken", () => {
  it("Saves token to local storage", () => {
    expect(localStorage.getItem(key)).toBeNull();
    save(key, token);
    expect(JSON.parse(localStorage.getItem(key))).toEqual(token);
  });
});
