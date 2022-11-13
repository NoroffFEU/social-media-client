import { login } from "./login";
import LocalStorageMock from "../../storage/mocks/localstorage";

global.localStorage = new LocalStorageMock();

const testmail = "noroffStud@noroff.no";
const testpassword = "PASSWORD";
const apiResponse = {
  name: "noroffStud",
  email: "noroffStud@noroff.no",
  accessToken: "hyp0th3t1c4lt0k3n",
};

function failingCall() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Unauthorized",
  });
}

function successCall(apiResponse) {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(apiResponse),
  });
}

describe("login", () => {
  it("Returns a valid access token in local storage and valid response object", async () => {
    global.fetch = jest.fn(() => successCall(apiResponse));
    const expectedToken = apiResponse.accessToken;
    const response = await login(testmail, testpassword);
    const storedToken = JSON.parse(localStorage.getItem("token"));
    expect(storedToken).toEqual(expectedToken);
    expect(response).toEqual(apiResponse);
  });

  it("Throws error message on invalid details", async () => {
    global.fetch = jest.fn(() => failingCall());
    await expect(login(testmail, testpassword)).rejects.toThrow("Unauthorized");
  });
});
