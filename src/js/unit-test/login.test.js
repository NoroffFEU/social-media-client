import { login } from "../api/auth/login";

it("check if the user is valid and returns a token", async () => {
    await login("albertt@noroff.no", "albertalbert");
    const token = localStorage.getItem("token");
    expect(token).toBeDefined();
    console.log(token);
});
