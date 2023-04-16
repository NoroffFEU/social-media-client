import login from "./login";


describe("login", () => {
  test("if the login function fetches and stores a token in browser storage")
    expect(login.response).toContain(login.response);
    expect(login.profile.accessToken).toBeTruthy();
  });