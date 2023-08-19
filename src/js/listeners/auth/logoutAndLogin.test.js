import { load} from "../../storage/load.js"
import { save } from "../../storage/save.js";
import { remove } from "../../storage/remove.js";
import LocalStorageMock from "./mocks/localStorage.mock.js";

const key = "token";
const token = "12345";

beforeEach(() => {
  global.localStorage = new LocalStorageMock();
  localStorage.removeItem(key);
});

describe("save function", () => {
  it("saves a token in storage", () => {
    expect(localStorage.getItem(key)).toBeNull();
    save(key, token);
    expect(JSON.parse(localStorage.getItem(key))).toEqual(token);
  });
});

describe("load function", () => {
  it("loads a saved token from storage", () => {
    save(key, token);
    const loadedToken = load(key);
    expect(loadedToken).toEqual(token);
  });

  it("returns null if no token is found", () => {
    const loadedToken = load(key);
    expect(loadedToken).toBeNull();
  });

  it("returns null if there's an error parsing the stored token", () => {
    localStorage.setItem(key, "invalidJSON");
    const loadedToken = load(key);
    expect(loadedToken).toBeNull();
  });
});

describe("remove function", () => {
  it("removes a token from storage", () => {
    save(key, token);
    expect(JSON.parse(localStorage.getItem(key))).toEqual(token);
    remove(key);
    expect(localStorage.getItem(key)).toBeNull();
  });

  it("does nothing if key doesn't exist", () => {
    remove(key);
    expect(localStorage.getItem(key)).toBeNull();
  });
});
