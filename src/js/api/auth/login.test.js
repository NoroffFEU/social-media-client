import { LocalStorageMock } from "../../storage/LocalStorage.mock";
import { login } from "./login";



const Credentials = { email: "ingeborg@noroff.no", password: "23456" };
const ACCESSTOKEN = "ABCDE";
const PROFILE = {
    name: "Ingeborg",
    email: "ingeborg@noroff.no",
    accessToken: ACCESSTOKEN,
};

//expect failure
const FAIL_EMAIL_TEST = "ingeborg@hotmail.com"


global.localStorage = new LocalStorageMock();

//expect test-pass
function validFetch() {
    return Promise.resolve({
        ok: true,
        status: 200,
        statusText: "OK",
        json: jest.fn().mockResolvedValue(PROFILE),
    });
}

//expect test-fail
function failFetch(statusCode = 404, status = "Not Found") {
    return Promise.resolve({
        ok: false,
        statusCode,
        status,
    });
}


describe("login", () => {
    it("logs in user with email and password, and stores a token in localstorage", async () => {
        global.localStorage.clear();
        global.fetch = jest.fn(() => validFetch());
        await login(Credentials.email, Credentials.password);

        expect(JSON.parse(global.localStorage.getItem("token"))).toBe(ACCESSTOKEN);
        expect(JSON.parse(global.localStorage.getItem("profile"))).toEqual(PROFILE);
    });
    it("Returns HTTP 401 error when user has wrong credentials", async () => {
        global.fetch = jest.fn(() => failFetch(401, "Not authorized"));
        await expect(login(FAIL_EMAIL_TEST)).rejects.toThrow(new Error()
        );
    });
    it("Returns HTTP 404 error when no data is set", async () => {
        global.fetch = jest.fn(() => failFetch(400, ""));
        await expect(login()).rejects.toThrow(new Error()
        );
    });
})
