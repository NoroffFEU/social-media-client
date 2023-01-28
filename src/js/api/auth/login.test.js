import { login } from "./login"; 

// MockStorage

export default class LocalStorageMock {
    constructor() {
      this.store = {};} 
    clear() {
      this.store = {};}
    getItem(key) {
      return this.store[key] || null;}
    setItem(key, value) {
      this.store[key] = String(value);}
    removeItem(key) {
      delete this.store[key];}
}

global.localStorage = new LocalStorageMock();


// The login function stores a token when provided with valid credentials 

const TEST_EMAIL = "email@noroff.no"; 
const TEST_PASSWORD = "password"; 
const TEST_TOKEN = "random string"; 
const TEST_USERNAME = "username"
const TEST_PROFILE = {
    name: TEST_USERNAME, 
    email: TEST_EMAIL, 
    accessToken: TEST_TOKEN,
};

function fetchMockStorageSuccess() {
    return Promise.resolve({
        status: 200,
        ok: true, 
        statusText: "Success", 
        json: () => Promise.resolve(TEST_PROFILE),
    });
}

describe("login", () =>{
    it("stores a token when provided with valid credentials", async () => {
        global.fetch = jest.fn(() => fetchMockStorageSuccess()); 
        
        const result = await login (TEST_EMAIL, TEST_PASSWORD); 
        
        expect(result).toEqual(TEST_PROFILE);
        expect(JSON .parse(global.localStorage.getItem("token"))).toEqual(TEST_TOKEN);
    });
});
