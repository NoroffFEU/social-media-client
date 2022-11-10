import { login } from "./login.js";

test("Check login", async () => {
  await login("jowander_@noroff.no", "12345678");
  const token = localStorage.getItem("token");
  expect(token).toBeDefined();
});