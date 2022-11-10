import { login } from "./login";

test("Check login", async () => {
  await login("audun@stud.noroff.no", "Audun123");
  const token = localStorage.getItem("token");
  expect(token).toBeDefined();
});