import { login } from "./login.js";
import { LocalStorageMock } from "../../storage/storageMock";

global.localStorage = new LocalStorageMock();


// TEST user that will work
const TEST_EMAIL = "danielSollid@stud.noroff.no";
const TEST_PASSWORD = "Testing123";
const TEST_USER = {email: TEST_EMAIL, password: TEST_PASSWORD}

// Incorrect password
const TEST_PASSWORD_INCORRECT = "hello";

// Incorrect Email
const TEST_EMAIL_INCORRECT = "daniel@gmail.com"


function fetchSuccess(){
    return Promise.resolve({
        ok: true,
        status: 200,
        statusText: "OK",
        json: () => Promise.resolve(TEST_USER)
    })
};
/*
function fetchFailure(){
    return Promise.resolve({
        ok: false,
        status,
        statusText
    })
}
*/
describe("login", () =>{
    it("Returns a valid login", async () =>{
        global.fetch = jest.fn(() => fetchSuccess());
        const user = await login(TEST_EMAIL, TEST_PASSWORD);
        expect(TEST_EMAIL).toMatch(/^[\w\-.]+@(stud.)?noroff.no$/);
        expect(TEST_PASSWORD.length).toBeGreaterThanOrEqual(8);
        expect(user).toMatchObject(TEST_USER);
    })
/*
    it("Returns an invalid login", async () =>{
        global.fetch = jest.fn(() => fetchFailure());
        const user = login(TEST_EMAIL_INCORRECT, TEST_PASSWORD);
        expect(TEST_EMAIL).not.toMatch(/^[\w\-.]+@(stud.)?noroff.no$/);
        expect(TEST_PASSWORD).not.toBeGreaterThanOrEqual(8);
        expect(profile).toEqual(undefined);
    })
    */
})