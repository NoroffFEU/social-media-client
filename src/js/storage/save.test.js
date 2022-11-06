import { LocalStorageMock } from "./storageMock";
import * as storage from "./index";

global.localStorage = new LocalStorageMock();

describe("storage", () => {
  it("Saves an object to storage", () => {
    const key = "profile";
    const value = {
      name: "melisa_zorraindo",
      email: "MelZor72659@stud.noroff.no",
    };
    const serializedValue = JSON.stringify(value);
    storage.save(key, value);
    expect(localStorage.getItem(key)).toEqual(serializedValue);
  });
});
