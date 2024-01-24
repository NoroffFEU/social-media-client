import { save } from "./save.js";
import LocalStorageMock from "../mocks/localStorage.mock.js";


const key = "token";
const value = "12345";

beforeAll(() => {
  global.localStorage = new LocalStorageMock();
  localStorage.removeItem(key);
});

describe("save", () => {
  it("should save value to localStorage", () => {
    expect(localStorage.getItem(key)).toBeNull();
    save(key, value);
    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value));
  });
});
