import { LocalStorageMock } from "../../storage/LocalStorage.mock";
import { logout } from "./logout";

const TOKEN = "ABCDE";
const PROFILE = { name: "Ingeborg", email: "ingeborg@noroff.no" };

globals.localStorage = LocalStorageMock;

describe("logout", () => {
    it("removes the token and profile values from localStorage", async () => {
        globals.localStorage.setItem("token", TOKEN);
        globals.localStorage.setItem("profile", JSON.stringify(PROFILE));

        expect(globals.localStorage.getItem("token")).toEqual(TOKEN);
        expect(JSON.parse(globals.localStorage.getItem("profile"))).toEqual(PROFILE);

        logout();

        expect(globals.localStorage.getItem("token")).toBeNull();
        expect(globals.localStorage.getItem("profile")).toBeNull();
    });
});