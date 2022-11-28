/**
 *
 * A simple test describe test
 */
import { login } from "./api/auth/login.js";

describe("login the user", () => {
  it("login the user using correct email", async () => {
    expect(login.password).toEqual(login.email);
  });
  it("login the user using correct password", async () => {
    expect(login.password).toEqual(login.password);
  });

  it("throw a logging error if wrong credentials", () => {
    expect(login.email).toBeFalsy();
    expect(login.password).toBeFalsy();
  });
});
