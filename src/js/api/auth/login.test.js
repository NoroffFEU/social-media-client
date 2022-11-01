// import { login } from "./login";

// const localStorageMock = (function () {
//     let store = {};

//     return {
//       getItem(key) {
//         return store[key];
//       },

//       setItem(key, value) {
//         store[key] = value;
//       },

//       clear() {
//         store = {};
//       },

//       removeItem(key) {
//         delete store[key];
//       },

//       getAll() {
//         return store;
//       },
//     };
//   })();

//   Object.defineProperty(window, "localStorage", { value: localStorageMock });

// const TEST_EMAIL = "njbr10@stud.noroff.no";
// const TEST_PW = "qwertyuiop"
// const TEST_ID = 1;
// const TEST_BAD_ID = "banana";
// const TEST_ITEM = { email: TEST_EMAIL , password: TEST_PW}
// const TEST_OBJ = {name: 'njbr9', email: 'njbr9@stud.noroff.no', banner: null, avatar: ''}

// function fetchSuccess() {
//     return Promise.resolve({
//         ok: true,
//         status: 200,
//         statusText: "respone ok",
//         json: () => Promise.resolve(TEST_ITEM)
//     })
// }
// function fetchFailure(status = 404, statusText = "Not Found") {
//     return Promise.resolve({
//         ok: false,
//         status,
//         statusText
//     })
// }

// describe("login", () => {
//     it("returns a valid token when provided with valid credentials", async () => {
//         // const mockId = 1;
//         // const mockJson = { data: "json data" };
//         global.fetch = jest.fn(() => fetchSuccess());
//         const item = await login(TEST_EMAIL, TEST_PW);
//         console.log("item:::::",item);
//         ecpect(item).toEqual(TEST_ITEM);
//     })

// })

test.todo("makeshift test for login()");
