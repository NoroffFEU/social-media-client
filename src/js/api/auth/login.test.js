import { login } from "./login";

// Using localStorage mock example from video going through the CA ( https://www.youtube.com/watch?v=7gF_0WqeQW8&ab_channel=Noroff-Frontend )

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
    delete this.store(key);
  }
}

global.localStorage = new LocalStorageMock();

const badUser = "tisto@noron.no";
const badPass = "lololol";

const goodUser = "testingtiesto@noroff.no";
const goodPass = "asdf1234";

const verifiedUser = {
  name: "Tiesto",
  email: "testingtiesto@noroff.no",
  accessToken: "wriT3aRand0Mt0k3n.#iSn1CE",
};

const goodFetch = () => {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve({ ...verifiedUser }),
  });
};

const badFetch = () => {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Unauthorized",
  });
};

describe("login", () => {
  it("gets token and successful fetch", async () => {
    global.fetch = jest.fn(() => goodFetch());
    const data = await login(goodUser, goodPass);
    expect(data.accessToken).toEqual(verifiedUser.accessToken);
  });

  it("gets error when credentials are wrong", async () => {
    global.fetch = jest.fn(() => badFetch());
    await expect(login(badUser, badPass)).rejects.toThrow("Unauthorized");
  });
});
