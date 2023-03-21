import { LocalStorageMock } from "../../storage/LocalStorage.mock";
import { logout } from "./logout";

const TOKEN = "ABCDE";
const PROFILE = { name: "Ingeborg", email: "ingeborg@noroff.no" };

global.localStorage = new LocalStorageMock();

describe("logout", () => {
    it("removes the token and profile values from localStorage", async () => {
        global.localStorage.setItem("token", TOKEN);
        global.localStorage.setItem("profile", JSON.stringify(PROFILE));

        expect(global.localStorage.getItem("token")).toEqual(TOKEN);
        expect(JSON.parse(global.localStorage.getItem("profile"))).toEqual(PROFILE);

        logout();

        expect(global.localStorage.getItem("token")).toBeNull();
        expect(global.localStorage.getItem("profile")).toBeNull();
    });
});