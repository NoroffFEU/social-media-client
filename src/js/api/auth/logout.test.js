import { storage } from "../../mocks/lStorage";
import { logout } from "./logout";

global.localStorage = storage();

beforeAll(() => {
  localStorage.setItem("token", "asd");
  localStorage.setItem("profile", "placeholder");
});

test("Removes the stored token when the logout function is called", () => {
  expect(localStorage.getItem("token")).toEqual("asd");
  expect(localStorage.getItem("profile")).toEqual("placeholder");

  logout();

  expect(localStorage.getItem("token")).toBeNull();
  expect(localStorage.getItem("profile")).toBeNull();
});
