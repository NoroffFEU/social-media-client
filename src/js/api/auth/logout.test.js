import LocalStorageMock from "../mock/localStorage.mock";
import { remove, save } from "../../storage";

const key = "token";
const token = "123abc";

beforeEach(() => {
  global.localStorage = new LocalStorageMock();
  localStorage.removeItem(token);
});

describe("remove", () => {
  it("Removes token from local storage", () => {
    expect(localStorage.getItem(key)).toBeNull();
    save(key, token);
    expect(JSON.parse(localStorage.getItem(key))).toEqual(token);
    remove(key);
    expect(JSON.parse(localStorage.getItem(key))).toEqual(null);
  });
});
