import { login } from "./login";

const name = "mayt";
const email = "maytest25@noroff.no";
const invalidEmail = "test@email.no";
const password = "password";
const avatar =
  "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcwLCJuYW1lIjoiTWF5dCIsImVtYWlsIjoibWF5dGVzdDI1QG5vcm9mZi5ubyIsImF2YXRhciI6Imh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTg4OTQzMjExMzQ2LTA5MDhhMWZiMGIwMT9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTAzNSZxPTgwIiwiYmFubmVyIjpudWxsLCJpYXQiOjE2Njc5OTE2MjV9.QTqA-Jp8aYphbH53L4qFDnxrWgb87jB3NaowXtRCHh0";

const profile = {
  name: name,
  email: email,
  avatar: avatar,
  accessToken: token,
};

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

/**
 * A mock fetch function that fetches successfully
 * @returns {Promise<object>} A promise that resolves to the test item
 * @example
 * ```js
 * global.fetch = jest.fn(() => fetchSuccess());
 * ```
 */
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(profile),
  });
}

/**
 * A mock fetch function that fetches unsuccessfully
 * @param {number} status The status code to return
 * @param {string} statusText The status text to return
 * @returns {Promise<object>} A promise that resolves the test item
 * @example
 * ```js
 * global.fetch = jest.fn(() => fetchFailure(500, "Internal Server Error"));
 * ```
 */
function fetchFailure(status = 401, statusText = "Unsuccessful") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("login", () => {
  it("Returns a valid token when provided with valid credentials", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const response = await login(profile);
    expect(response.accessToken).toEqual(profile.accessToken);
    expect(response.email).toEqual(profile.email);
    expect(response.password).toEqual(profile.password);
  });

  it("Will not login in when provided invalid credentials", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    await expect(login(invalidEmail, password)).rejects.toThrow("Unsuccessful");
  });
});
