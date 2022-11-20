import { login } from "./login";
import { mockLocalStorage } from "../../storage/mockStorage";

//MOCKSTORAGE
global.localStorage = new mockLocalStorage();

// CORRECT TEST PARTS
const TEST_USER = {
    name: "PHILZTRO",
    email: "phimik59854@stud.noroff.no",
};
const TEST_EMAIL = "phimik59854@stud.noroff.no";
const TEST_PASSWORD = "Noroff123";

// FAILURE TEST PARTS
const FAIL_TEST_EMAIL = "phm@live.no";
const FAIL_TEST_PASSWORD = "MyPassword";

// STRINGIFY THE USER
const TEST_PROFILE = JSON.stringify(TEST_USER);

//WORKING FETCH
function fetchSuccess() {
    return Promise.resolve({
        ok: true,
        status: 200,
        statusText: "All OK!",
        json: () => Promise.resolve(TEST_USER)
    });
}

//NOT A WORKING FETCH
function failFetch(statusCode = 404, status = "Not Found") {
    return Promise.resolve({
        ok: false,
        statusCode,
        status,
    });
}

describe("login", () => {
    it("returns a valid token if correct login is used", async () => {
        global.fetch = jest.fn(() => fetchSuccess());
        const user = await login(TEST_EMAIL, TEST_PASSWORD);
        const profile = JSON.stringify(user);
        expect(TEST_EMAIL).toMatch(/^[\w\-.]+@(stud.)?noroff.no$/);
        expect(TEST_PASSWORD).toHaveLength(9);
        expect(profile).toMatch(TEST_PROFILE)
    });
    it("Returns an HTTP 401 error when user has wrong credentials", async () => {
        global.fetch = jest.fn(() => failFetch(401, "Not authorized"));
        await expect(login(FAIL_TEST_EMAIL, FAIL_TEST_PASSWORD)).rejects.toThrow(new Error()
        );
    });
    
    it("Returns an HTTP 404 error when no data is set", async () => {
        global.fetch = jest.fn(() => failFetch(400, ""));
        await expect(login()).rejects.toThrow(new Error()
        );
    });
})

