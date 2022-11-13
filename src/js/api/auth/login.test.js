import { login } from "./login";

// Found at https://stackoverflow.com/questions/11485420/how-to-mock-localstorage-in-javascript-unit-tests
// Used to avoid error due to localStorage not being defined
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

const badUserName = "oscaræ@norf.no";
const badPassword = "badPasssa";

const goodUserName = "oscar@noroff.no";
const goodPassword = "buttfuck";

const verifiedUser = {
    name: "Oscar",
    email: "oscar@noroff.no",
    accessToken: "dkfsohosdih768736723**23nnl"
}

const fetchSuccess = () => {
    return Promise.resolve({
        ok: true,
        status: 200,
        statusText: "OK",
        json: () => Promise.resolve({...verifiedUser})
    })
}

const fetchFailure = () => {
    return Promise.resolve({
        ok: false,
        status: 401,
        statusText: "Unauthorized"
    });
}

describe("login", () => {

    it("returns an oject that contains an access token", async () => {
        global.fetch = jest.fn (()=>fetchSuccess());
        global.localStorage = new MockStorage;
        const data = await login(goodUserName, goodPassword);
        expect(data.accessToken).toEqual(verifiedUser.accessToken);
    })

    it("throws an error when provided with invalid credentials", async () => {
        global.fetch = jest.fn(()=> fetchFailure());
        global.localStorage = new MockStorage;
        await expect(login(badUserName, badPassword)).rejects.toThrow("Unauthorized");
    }) 
})

