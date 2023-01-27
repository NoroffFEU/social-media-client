import { logout } from "./logout";

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



// The logout function clears the accessToken from localStorage

const TEST_EMAIL = "email@noroff.no"; 
const TEST_TOKEN = "random string"; 
const TEST_USERNAME = "username"
const TEST_PROFILE = JSON.stringify({
    name: TEST_USERNAME, 
    email: TEST_EMAIL, 
});


describe ("logout", () => {
    it("clears the accessToken from localStorage", () => {

        global.localStorage.setItem("profile", TEST_PROFILE); 
        global.localStorage.setItem("token", TEST_TOKEN); 
        expect(global.localStorage.getItem("profile")).toEqual(TEST_PROFILE);
        expect(global.localStorage.getItem("token")).toEqual(TEST_TOKEN);

        logout(); 

        const resultProfile = global.localStorage.getItem("profile");
        const resultToken = global.localStorage.getItem("token");
        expect(resultProfile).toEqual(null);
        expect(resultToken).toEqual(null);

    });
});