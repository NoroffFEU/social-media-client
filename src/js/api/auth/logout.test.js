import { mockLocalStorage } from "../../storage/mockStorage";
import { logout } from "./logout"
import * as storage from "../../storage/index"

// MOCKSTORAGE
global.localStorage = new mockLocalStorage();

// USER INFO
const TEST_USER_PROFILE = "profile";
const TEST_USER = {
    name: "PHILZTRO",
    email: "phimik59854@stud.noroff.no"
};

// TOKEN INFO
const TEST_KEY = "token";
const TEST_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTE3LCJuYW1lIjoiUEhJTFpUUk8iLCJlbWFpbCI6InBoaW1pazU5ODU0QHN0dWQubm9yb2ZmLm5vIiwiYXZhdGFyIjoiaHR0cHM6Ly9mcmVlaW1hZ2UuaG9zdC9pL0g5U0E1MEoiLCJiYW5uZXIiOm51bGwsImlhdCI6MTY2ODgxOTM4Mn0.fWV3r-EjZV73E4RQAN2Y_LX5G3coU_nkUigFTueWBpM";

// STRINGIFY USER
const TEST_PROFILE = JSON.stringify(TEST_USER);


//UNIT TEST LOGOUT
describe("logout user", () => {
    it("Removes the login token from the storage when the user logs out", () => {
        storage.save(TEST_KEY, TEST_TOKEN);
        expect(storage.load(TEST_KEY)).toEqual(TEST_TOKEN)
        logout();
        expect(storage.load(TEST_KEY)).toEqual(null)
    })

    it("Removes user info from storage when user logs out", () => {
        storage.save(TEST_USER_PROFILE, TEST_PROFILE);
        expect(storage.load(TEST_USER_PROFILE)).toEqual(TEST_PROFILE);
        logout();
        expect(storage.load(TEST_USER_PROFILE)).toEqual(null)
    });
});