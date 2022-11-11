import { login } from "./login.js";
import { logout } from "./logout.js";
import { remove } from "../../storage/index.js";

test("log out test", async () => {
    await login("audun@stud.noroff.no", "Audun123");
    const token = localStorage.getItem("token");
    expect(token).toBeTruthy;
    logout();
    const tokenAL = localStorage.getItem("token");
    expect(tokenAL).not.toBeTruthy;

})