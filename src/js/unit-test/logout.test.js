import { logout } from "../api/auth/logout";

it("clear the local storage", () => {
    logout();
    const token = localStorage.getItem("token");
    expect(token).toBeNull();
    console.log(token);
});
