import { login } from "./login";
import { storage } from "../../mocks/lStorage";

//Package docs:
//Local storage: https://www.npmjs.com/package/local-storage-mock

global.localStorage = storage();

Object.defineProperty(global, "localStorage", { value: localStorage });

beforeEach(() => {
  fetch.resetMocks();
});

afterAll(() => {
  localStorage.removeItem("token");
});

test("Returns a user object with a token", async () => {
  global.fetch = jest.fn(() => fetchSuccess());

  const response = await login("email@email.com", "password");
  expect(response.name).toEqual("Test user");
  expect(response.token).toEqual("asd123qwe456");
});
