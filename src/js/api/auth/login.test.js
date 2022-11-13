import { login } from "./login";
import { storage } from "../../mocks/lStorage";
import { fetchSuccess } from "../../mocks/fetchSuccess";
import { fetchFailure } from "../../mocks/fetchFail";

//Package docs:
//Local storage: https://www.npmjs.com/package/local-storage-mock

global.localStorage = storage();

Object.defineProperty(global, "localStorage", { value: localStorage });

afterAll(() => {
  localStorage.removeItem("token");
});

test("Returns a user object with a token", async () => {
  global.fetch = jest.fn(() => fetchSuccess());

  const response = await login("email@email.com", "password");
  expect(response.name).toEqual("Test user");
  expect(JSON.parse(localStorage.getItem("token"))).toEqual("asd123qwe456");
});
