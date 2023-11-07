// import { apiPath } from "../constants.js";
// import { headers } from "../headers.js";
// import { save } from "../../storage/index.js";
// import { login } from "./login.js"

// test('login', async () => {
//   // arrange
//   localStorage.clear();
//   // act
//   const response = await login('bori@example.org', 'hello');
//   // assert
//   expect(localStorage.getItem('token')).toBe(undefined);
//   expect(localStorage.getItem('profile')).toEqual('{"name":"Bori"}');
//   expect(response).toEqual({name: 'Bori'});
// })

// test("login", () => {
// it("can fetch and store the token", async () => {
//   localStorage.clear();
//   // const response = await login(email, password);
//   const token = await login();
//   expect(localStorage.setItem('token')).toBeDefined(undefined);
// })
// })

// test("save", async () => {
//     // localStorage.clear();
//     // const response = await login(email, password);
//     const profile = await response.json("token", profile.accessToken);
//     expect(localStorage.setItem("token")).toBeDefined(undefined);
//   })

//ez mukodott itt lejjebb

// test("can fetch and store the token", () => {
//     const response = login("test@example.org", "password");
//     const accessToken = response.accessToken;
//     expect(save).toBeDefined(undefined);
//   })
