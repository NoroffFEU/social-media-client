import { login } from "../login";

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

const email = "johndoe@noroff.no";
const email_stud = "johndoe@stud.noroff.no";
const pw = "123456789";
const item = {
  name: "johndoe",
  email: `${email}`,
  avatar: "",
};
const exampleJWTToken =
  "eyJhbJciOiJIUzI1NiIsInR5cCI7IkpXVCJ9.eyJpZCI6ODYsIm5hbWUiOiJubmJyOSIsImVtYWlsIjoibmpicjlBc3R1ZC5ub3JvZmYubm8iLCJhdmF0YXIiOiJodHRwczovL2ltYWdlcy51bnMwaGFzaC5jb20vcGhvdG8tMTY2NzE0MzI5NzYzNC0zMWM2YzVmNzBzODE_aXhsaWI9dmItNC4wLjMmaXhpZD1Nbmd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvpwZvcm1hdCZmaXQ9Y3JvcCZ3PTY4NyZxPTgwIiwiYmFubmVyIjpudWxsLCJpYXQiOjE2NjczNDE3MjN9.HkLJEA0Vr85CGeeruRCy8ou_zOoLN-DcQmpBKnt4oLB";

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "respone status: ok",
    json: () => Promise.resolve({ ...item, exampleJWTToken }),
  });
}
function fetchFailure(status = 404, statusText = "Not Found") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

const jwtRegEx = /^(?:[\w-]*\.){2}[\w-]*$/;
const jwtRegEx2 = /(^[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*$)/;
const jwtRegEx3 = /(^[\w-]*\.[\w-]*\.[\w-]*$)/;
const jwtRegEx4 = /^(?:[\w-]*\.){2}[\w-]*$/;

describe("login", () => {
  it("returns a valid token when provided with valid credentials", async () => {
    const pw_string = pw.toString();
    global.fetch = jest.fn(() => fetchSuccess());
    const data = await login(email_stud, pw_string);
    expect(email_stud).toMatch("@stud.noroff.no");
    expect(pw_string.length).toBeGreaterThanOrEqual(6);
    expect(data.exampleJWTToken).toMatch(jwtRegEx);
    expect(data.exampleJWTToken).toMatch(jwtRegEx2);
    expect(data.exampleJWTToken).toMatch(jwtRegEx3);
    expect(data.exampleJWTToken).toMatch(jwtRegEx4);
  });
  it("returns a valid token when provided with valid credentials (different email ending)", async () => {
    const pw_string = pw.toString();
    global.fetch = jest.fn(() => fetchSuccess());
    const data = await login(email, pw_string);
    expect(email).toMatch("@noroff.no");
    expect(pw_string.length).toBeGreaterThanOrEqual(6);
    expect(data.exampleJWTToken).toMatch(jwtRegEx);
    expect(data.exampleJWTToken).toMatch(jwtRegEx2);
    expect(data.exampleJWTToken).toMatch(jwtRegEx3);
    expect(data.exampleJWTToken).toMatch(jwtRegEx4);
  });
  it("Throws: Error 'Not Found' when given incorrect data", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    await expect(login(999, [])).rejects.toThrow("Not Found");
  });
});
