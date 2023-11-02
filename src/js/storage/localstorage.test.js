import { save, load } from "../storage/index.js";
import { logout } from "../api/auth/logout.js";

// describe("storage", () => {
//   it("saves and retrieves key from localStorage, and removes the key when logging out", () => {
//     const key = "token";
//     const value = ["Rofl4321mao1234"];
//     const stringified = JSON.stringify(value);
//     save(key, value);
//     expect(load(key)).toEqual(value);
//     expect(localStorage.getItem(key)).toEqual(stringified);
//     logout();
//     expect(localStorage.getItem(key)).toEqual(null);
//   });
// });

describe("storage", () => {
  it("removes the key from localStorage when logging out", () => {
    const key = "token";
    const value = ["Rofl4321mao1234"];

    save(key, value);

    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value));

    logout();
    expect(localStorage.getItem(key)).toEqual(null);
  });
});
