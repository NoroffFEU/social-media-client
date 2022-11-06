import { LocalStorageMock } from "../../storage/storageMock";
import * as storage from "../../storage/index";
import { logout } from "./logout";

global.localStorage = new LocalStorageMock();

describe("storage", () => {
  it("Removes a string from storage when user logs out", () => {
    const token = logout();
    const key = "token";
    const value =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6Im1lbGlzYV96b3JyYWluZG8iLCJlbWFpbCI6Ik1lbFpvcjcyNjU5QHN0dWQubm9yb2ZmLm5vIiwiYXZhdGFyIjpudWxsLCJiYW5uZXIiOm51bGwsImlhdCI6MTY2NzcyMjkzNH0.SlTCbNEJgcfMufZgHNDzDdXD3WlScsFN05S2VVFq9Dw";
    storage.save(key, value);
    expect(storage.load(key)).toEqual(value);
    storage.remove(key);
    expect(token).toEqual(undefined);
  });

  it("Removes an object from storage when user logs out", () => {
    const profile = logout();
    const key = "profile";
    const value = {
      name: "melisa_zorraindo",
      email: "MelZor72659@stud.noroff.no",
    };
    storage.save(key, value);
    expect(storage.load(key)).toEqual(value);
    storage.remove(key);
    expect(profile).toEqual(undefined);
  });
});
