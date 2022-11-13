import { login } from "./login";
import { storage } from "../../mocks/lStorage";
import { fetchSuccess } from "../../mocks/fetchSuccess";

//Package docs:
//Local storage: https://www.npmjs.com/package/local-storage-mock

global.localStorage = storage();

const testItem = {
  name: "Test user",
  email: "test@test.no",
  accessToken: "asd123qwe456",
};

afterAll(() => {
  localStorage.removeItem("token");
});

test("Returns a user object with a token", async () => {
  global.fetch = jest.fn(() => fetchSuccess(testItem));

  const response = await login("email@email.com", "password");
  expect(response.name).toEqual("Test user");
  expect(JSON.parse(localStorage.getItem("token"))).toEqual("asd123qwe456");
});
