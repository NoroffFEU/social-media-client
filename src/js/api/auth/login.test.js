import { login } from "./login.js";
const GOOD_EMAIL = "testing@noroff.no";
const BAD_EMAIL = "towl@ee.com";
const PASSWORD = "12345678";
const TOKEN = "dsgf87775dejgf294549de";
const profile = {
    name: "Eirik",
    email: GOOD_EMAIL,
  };
describe("login", () => {
    beforeEach(() => {
        global.localStorage = {
          setItem: jest.fn(),
          getItem: jest.fn(),
          removeItem: jest.fn(),
          clear: jest.fn(),
        };
        });
    it("it fetches and stores token in browser", async () => {
        global.fetch = jest.fn(() => fetchSuccess());
        const data = await login(GOOD_EMAIL, PASSWORD); 
        expect(GOOD_EMAIL).toMatch("@noroff.no");
        expect(PASSWORD).toHaveLength(8);
        expect(data.TOKEN).toEqual(TOKEN);
    })
})

function fetchSuccess(status = 201, statusText = "Success!") {
    return Promise.resolve({
      ok: true,
      status,
      statusText,
      json: () => Promise.resolve({ ...profile, TOKEN }),
    });
  }