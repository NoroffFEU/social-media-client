import { LocalStorageMock } from "../../storage/LocalStorage.mock";
import { login } from "./login";

const Credentials = { email: "ingeborg@noroff.no", password: "23456" };
const ACCESSTOKEN = "ABCDE";
const PROFILE = {
    name: "Ingeborg",
    email: "ingeborg@noroff.no",
    accessToken: ACCESSTOKEN,
};

global.localStorage = new LocalStorageMock();

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
        global.localStorage.clear();
        global.fetch = jest.fn(() => validCredentials());
        await login(Credentials.email, Credentials.password);

        expect(JSON.parse(global.localStorage.getItem("token"))).toBe(ACCESSTOKEN);
        expect(JSON.parse(global.localStorage.getItem("profile"))).toEqual(PROFILE);
    });
});
