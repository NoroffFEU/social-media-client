import { login } from "../js/api/auth/login";

// Correct login credentials.

const email = "testingss@noroff.no";
const password = "asdf1234";

// Wrong login credentials.

const fakeEmail = "test@gmail.com";
const fakePassword = "wrongpassword";

describe("Test Login functionality", () => {
  it("Logs user in when the login was successful", async () => {
    const response = await login(email, password);
    const data = await response;
    expect(data).toMatchObject({
      name: "asdasd",
      email: "testingss@noroff.no",
      banner: null,
      avatar: null,
    });
  });
  it("Returns a Error when login is unsuccessful", async () => {
    await expect(login(fakeEmail, fakePassword)).rejects.toThrow(
      "Unauthorized"
    );
  });
});
