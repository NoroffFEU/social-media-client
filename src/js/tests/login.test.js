// import "jest-localstorage-mock";
// //import { login } from "../api/auth/login";

// describe("login function", () => {
//   it(" stores token in browser", () => {
//     localStorage.setItem("token", "mocked-token");
//     expect(localStorage.getItem("token")).toBe("mocked-token");
//   });

// });

//////

import { login } from "../api/auth/login"; // Import the actual login function
import "jest-localstorage-mock";

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     ok: true,
//     json: () => Promise.resolve({ accessToken: "mocked-token" }),
//     statusText: "OK",
//   })
// );

describe("login function", () => {
  //   beforeEach(() => {
  //     localStorage.clear(); // Clear localStorage before each test
  //     jest.clearAllMocks();
  //   });

  it("fetches and stores token in browser", async () => {
    const email = "eivindalex@noroff.no";
    const password = "asdf1234";

    await login(email, password);

    expect(localStorage.getItem("token")).toBeTruthy();
  });
});
