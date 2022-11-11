import { LocalStorageMock } from "../../storage/storageMock";
import * as storage from "../../storage/index";
import { logout } from "./logout";

global.localStorage = new LocalStorageMock();

const TEST_KEY = "token";
const TEST_VALUE =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6Im1lbGlzYV96b3JyYWluZG8iLCJlbWFpbCI6Ik1lbFpvcjcyNjU5QHN0dWQubm9yb2ZmLm5vIiwiYXZhdGFyIjpudWxsLCJiYW5uZXIiOm51bGwsImlhdCI6MTY2NzcyMjkzNH0.SlTCbNEJgcfMufZgHNDzDdXD3WlScsFN05S2VVFq9Dw";

const TEST_KEY_PROFILE = "profile";
const TEST_VALUE_PROFILE = {
  name: "melisa_zorraindo",
  email: "MelZor72659@stud.noroff.no",
};
const TEST_USER = JSON.stringify(TEST_VALUE_PROFILE);

describe("logout", () => {
  it("Removes the token from storage when user logs out", () => {
    storage.save(TEST_KEY, TEST_VALUE);
    expect(storage.load(TEST_KEY)).toEqual(TEST_VALUE);
    logout();
    expect(storage.load(TEST_KEY)).toEqual(null);
  });

  it("Removes profile data from storage when user logs out", () => {
    storage.save(TEST_KEY_PROFILE, TEST_USER);
    expect(storage.load(TEST_KEY_PROFILE)).toEqual(TEST_USER);
    logout();
    expect(storage.load(TEST_KEY_PROFILE)).toEqual(null);
  });
});
