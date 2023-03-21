import { LocalStorageMock } from "../../storage/LocalStorage.mock";
import { login } from "./login";

const Credentials = { email: "ingeborg@noroff.no", password: "23456" };
const ACCESSTOKEN = "ABCDE";
const PROFILE = {
    name: "Ingeborg",
    email: "ingeborg@noroff.no",
    accessToken: ACCESSTOKEN,
};

globals.localStorage = LocalStorageMock;

function validCredentials() {
    return Promise.resolve({
        ok: true,
        status: 200,
        statusText: "OK",
        json: jest.fn().mockResolvedValue(PROFILE),
    });
}

describe("login", () => {
    it("logs in user with email and password, and stores a token in localstorage", async () => {
        globals.localStorage.clear();
        globals.fetch = jest.fn(() => validCredentials());
        await login(Credentials.email, Credentials.password);

        expect(JSON.parse(globals.localStorage.getItem("token"))).toBe(ACCESSTOKEN);
        expect(JSON.parse(globals.localStorage.getItem("profile"))).toEqual(PROFILE);
    });
});
