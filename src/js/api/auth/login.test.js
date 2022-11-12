import { login } from "./login";
import { localStorage } from "../../mocks/lStorage";

//Package docs:
//Fetch: https://www.npmjs.com/package/jest-fetch-mock
//Local storage: https://www.npmjs.com/package/local-storage-mock

localStorage();

beforeEach(() => {
  fetch.resetMocks();
});

test("Returns a user object with a token", async () => {
  const user = {
    name: "kristoffer",
    email: "kristoffer@stud.noroff.no",
    token: "asd123qwe456",
  };

  fetch.mockResponseOnce(JSON.stringify(user));
  const response = await login("kristoffer@stud.noroff.no", "password");
  expect(response.name).toEqual("kristoffer");
  expect(response.token).toEqual("asd123qwe456");
});

test("Throws an error if invalid credentials are passed in", () => {});
