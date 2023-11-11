// test("It fetches the login input data from the login data from the user, and if successful, stores the access token in the localstorage, so that the user is logged in and can perform the various functions of a logged in user.",
// () => {
//   expect( if(response.ok) {
//     window.localStorage;
//   })
// });

// import login from "./src/js/api/auth/login";

// const TEST_VALUE_EMAIL = "arnulf.gregersen@stud.noroff.no";
// const TEST_VALUE_PASSWORD = "test-password";

// // Create a mock function that will pretend to be the native fetch function
// const mockFetchSuccess = jest.fn().mockResolvedValue({
//   ok: true,
//   json: jest.fn().mockResolvedValue(
//     { accessToken: 1234567890, username: "Arnulf_Gregersen", email: "arnulf.gregersen@stud.noroff.no", avatar: "test-url" }
//   )
// });

// // Assign this to the global fetch function
// global.fetch = mockFetchSuccess;

// // The login function fetches and stores a token in browser storage
// describe("login function", () => {

//   it("inputs and stringifies the email and password from the login form into the header for the api call", async () => {

//   });

//   it("makes an api call with the correct URL and header to fetch the profile data", async () => {
//     const data = await login(TEST_VALUE_EMAIL, TEST_VALUE_PASSWORD);
//     expect(data.json.accessToken).toContain(1234567890);
//   });

//   it("stores the accessToken value to the local storage if the api call was successful", async () => {

//   });

//   it("then deletes the accessToken from the profile json response for safety reasons", async () => {

//   });

//   it("it then stores the remaining profile json response to local storage for later use", async () => {

//   });

//   it("it then returns the remaining profile json response from the function for other usages", async () => {

//   });

// })

// // login.js

// // import { apiPath } from "../constants.js";
// // import { headers } from "../headers.js";
// // import { save } from '../../storage/index.js'

// // export async function login(email, password) {
// //   const response = await fetch(`${apiPath}/social/auth/login`, {
// //     method: "post",
// //     body: JSON.stringify({ email, password }),
// //     headers: headers("application/json")
// //   })

// //   if (response.ok) {
// //     const profile = await response.json()
// //     save("token", profile.accessToken)
// //     delete profile.accessToken
// //     save("profile", profile)
// //     return profile
// //   }

// //   throw new Error(response.statusText)
// // }

// // headers.js

// // import * as storage from '../storage/index.js'

// // export const headers = (contentType) => {
// //   const token = storage.load("token");
// //   const headers = {}

// //   if (contentType) {
// //     headers["Content-Type"] = contentType;
// //   }

// //   if (token) {
// //     headers.Authorization = `Bearer ${token}`;
// //   }

// //   return headers;
// // }

// // constants.js

// // export const apiUrl = new URL("https://nf-api.onrender.com/api/v1");
// // export const apiPath = apiUrl.toString()

// // logout.js

// // import { remove } from "../../storage/index.js";

// // export function logout() {
// //   remove("token")
// //   remove("profile")
// // }

// // save.js

// // export const save = (key, value) => {
// //   localStorage.setItem(key, JSON.stringify(value))
// // }

// // remove.js

// // export const remove = (key) => localStorage.removeItem(key)
