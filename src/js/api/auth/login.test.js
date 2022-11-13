import { login } from "./login";
import { lStorage } from "../../mocks/lStorage";
import { fetchSuccess } from "../../mocks/fetchSuccess";
import { fetchFailure } from "../../mocks/fetchFail";

//Package docs:
//Local storage: https://www.npmjs.com/package/local-storage-mock

lStorage();

test("Returns a user object with a token", async () => {
  global.fetch = jest.fn(() => fetchSuccess());

  const response = await login("email@email.com", "password");
  expect(response.name).toEqual("Test user");
  expect(response.token).toEqual("asd123qwe456");
});
