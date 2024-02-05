import { login } from "../js/api/auth/login";

const mockFetchSuccess = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue()
  });
  
global.fetch = mockFetchSuccess;

describe("Login function", () => {
    it("fetches a token", async () => {
        const data = await login();
        expect(data.response).not.toBeNull();
    });
});