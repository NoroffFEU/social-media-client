import { login } from "./login";
import { storage } from "../../mocks/lStorage";

//Package docs:
//Fetch: https://www.npmjs.com/package/jest-fetch-mock
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
  const user = {
    name: "kristoffer",
    email: "kristoffer@stud.noroff.no",
    accessToken: "asd123qwe456",
  };

  fetch.mockResponseOnce(JSON.stringify(user));
  const response = await login("kristoffer@stud.noroff.no", "password");
  expect(response.name).toEqual("kristoffer");
  expect(JSON.parse(localStorage.getItem("token"))).toEqual("asd123qwe456");
});

/* test("Throws an error if invalid credentials are passed in", async () => {
  fetch.mockReject(new Error("Fake error message"));

  const response = await login("this@should.fail", "password");
  expect(response.ok).toBeNull();
}); */
