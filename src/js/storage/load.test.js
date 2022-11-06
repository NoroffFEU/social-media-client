import { LocalStorageMock } from "./storageMock";
import * as storage from "./index";

global.localStorage = new LocalStorageMock();

describe("storage", () => {
  it("Loads an array from storage", () => {
    const key = "profile";
    const value = {
      name: "melisa_zorraindo",
      email: "MelZor72659@stud.noroff.no",
    };
    storage.save(key, value);
    expect(storage.load(key)).toEqual(value);
  });
});
