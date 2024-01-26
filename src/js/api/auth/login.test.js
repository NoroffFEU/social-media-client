const login = require("./login");

test("registering a name, email, password and avatar", async () => {
  const data = await fetchData();
  expect(data).toBe(email);
});
