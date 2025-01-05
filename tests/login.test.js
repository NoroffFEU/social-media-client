import { login } from "../src/js/api/auth/login.js";


describe("Login Functionality", () => {
  beforeEach(() => {
    // Clear any previous localStorage data before each test
    global.localStorage.clear();
  });

  it("should login successfully and save token and profile to localStorage", async () => {
    const email = process.env.LOGIN_EMAIL;
    const password = process.env.LOGIN_PASSWORD;

    const response = await login(email, password);

    // After login, check if the token and profile are saved in localStorage
    expect(global.localStorage.getItem("token")).toBeTruthy();
    expect(global.localStorage.getItem("profile")).toBeTruthy();

    // Check if the profile data is correct
    const storedProfile = JSON.parse(global.localStorage.getItem("profile"));
    expect(storedProfile.accessToken).toBeTruthy();

  
  });

});
