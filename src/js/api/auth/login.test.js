import { login } from "./login";
import { LocalStorageMock } from "../../mock/localStorage.mock";

const validEmail = "cor@stud.noroff.no";
const validpassword = "loginpass";
const mockResponse = {
  name: "cor",
  email: validEmail,
  accessToken: "12345",
};

beforeAll(() => {
  global.localStorage = new LocalStorageMock();
});

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "Login successful",
    json: () => Promise.resolve(mockResponse),
  });
}

function fetchFail() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Invlid login",
  });
}

describe("login", () => {
  it("Returns a valid access token in local storage and valid response object", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const expectedToken = mockResponse.accessToken;
    const response = await login(validEmail, validpassword);
    expect(JSON.parse(localStorage.getItem("token"))).toEqual(expectedToken);
    expect(response).toEqual(mockResponse);
  });
  it("show an error message if invalid login", async () => {
    global.fetch = jest.fn(() => fetchFail());
    await expect(login(validEmail, validpassword)).rejects.toThrow(
      "Invlid login",
    );
  });
});
