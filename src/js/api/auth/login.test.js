import { login} from "./login.js";

const USER_DATA = {
    id: 1,
    email: "test@test.com",
    password: "123456789"
}

const mockFetchSuccess = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(USER_DATA)
  });
  
  const mockFetchFailure = jest.fn().mockResolvedValue({
    ok: false, statusText: "Unable to fetch data" 
  });

  

  describe("login", () => {
    it("return a user object if the call is successful", async () => {
        global.fetch = mockFetchSuccess;
      const data = await login({});
      expect(data).toEqual(USER_DATA);
    });

    


  it("throws an error when the request fails", async () => {
    global.fetch = mockFetchFailure;
    await expect(login({})).rejects.toThrow("Unable to fetch data");
  })
});
  