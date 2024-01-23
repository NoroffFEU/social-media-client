const register = require("./register");

test("registering a name, email, password and avatar", async () => {
  const data = await fetchData();
  expect(data).toBe(email);
});
