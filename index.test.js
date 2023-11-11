// import { login } from "./src/js/api/auth/login";

test("It adds 1 and 2 and gets 3 as a result", () => {
  expect(1 + 2).toEqual(3);
});

// test("It fetches the login input data from the login data from the user, and if successful, stores the access token in the localstorage, so that the user is logged in and can perform the various functions of a logged in user.",
// () => {
//   expect( if(response.ok) {
//     window.localStorage;
//   })
// });

import login from "./src/js/api/auth/login";

describe("login", () => {
  it("returns the login fetch api call, with the access token, it the api fetch call is successful", async () => {
    const data = await login();
    expect(data.length).toBeLessThanOrEqual(3);
  });
});

// export async function login(email, password) {
//   const response = await fetch(`${apiPath}/social/auth/login`, {
//     method: "post",
//     body: JSON.stringify({ email, password }),
//     headers: headers("application/json")
//   })

//   if (response.ok) {
//     const profile = await response.json()
//     save("token", profile.accessToken)
//     delete profile.accessToken
//     save("profile", profile)
//     return profile
//   }

//   throw new Error(response.statusText)
// }
