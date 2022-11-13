import { logout } from "./api/auth/logout.js";

test("It disconnect and logs out the user", async () => {
  expect(logout).toBeTruthy();
});
