import { MockLocalStorage } from "../../storage/mockLocalStorage";
import { logout } from "./logout";

const TOKEN = "ABCDE";
const PROFILE = { name: "Sarah", email: "sarah@noroff.no" };

global.localStorage = new MockLocalStorage();

describe("logout", () => {
  it("removes the token and profile values from localStorage", async () => {
    // Set the values in localStorage
    global.localStorage.setItem("token", TOKEN);
    global.localStorage.setItem("profile", JSON.stringify(PROFILE));

    // Double check that the values are stored in localStorage before we continue
    expect(global.localStorage.getItem("token")).toEqual(TOKEN);
    expect(JSON.parse(global.localStorage.getItem("profile"))).toEqual(PROFILE);

    // Attempt to log out
    logout();

    // Check if the values have been deleted from localStorage
    expect(global.localStorage.getItem("token")).toBeNull();
    expect(global.localStorage.getItem("profile")).toBeNull();
  });
});
