import { logout } from "./logout";

// Found at https://stackoverflow.com/questions/11485420/how-to-mock-localstorage-in-javascript-unit-tests
class MockStorage {
    constructor () {
      this.storage = new Map()
    }
    setItem (key, value) {
      this.storage.set(key, value)
    }
    getItem (key) {
      return this.storage.get(key)
    }
    removeItem (key) {
      this.storage.delete(key)
    }
    clear () {
      this.constructor()
    }
}

const accessToken = "arandomtokensettotestthisfunction1999";

describe("logout", () => {
    it("clears the access token from local storage", () => {
        global.localStorage = new MockStorage;
        localStorage.setItem("token", accessToken);

        //Verify that the token is loaded in the first place
        expect(localStorage.getItem("token")).toEqual(accessToken);

        logout();
        
        //Verify that the token is deleted after the function runs
        expect(localStorage.getItem("token")).toEqual(undefined);
    })
})