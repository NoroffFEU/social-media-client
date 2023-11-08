import { login } from "../api/auth/login";
import "jest-localstorage-mock";

describe("login function", () => {
  it("fetches and stores token in browser", async () => {
    const email = "user@noroff.no";
    const password = "password2";

    await login(email, password);

    expect(localStorage.getItem("token")).toBeTruthy();
  });
});
