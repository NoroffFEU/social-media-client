// Correct the import based on how localStorageMock.js is implemented
import localStorageMock from "../../mock/localStorageMock.js";

// Import login function from auth module
import { login } from "../login.js";

// Define a mock for the global fetch function
function FetchMock() {
  return jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ accessToken: "accessToken" }),
      statusText: "OK",
    }),
  );
}

beforeEach(() => {
  global.fetch = FetchMock();
  global.localStorage = localStorageMock; // Correct the assignment to use the mock
});

afterEach(() => {
  global.fetch.mockRestore();
  global.localStorage.clear();
});

it("Stores a token in localStorage", async () => {
  const email = "example@test.com";
  const password = "MyStrongPassword123";

  await login(email, password); // Assuming login is implemented correctly

  // Retrieve token from localStorage and parse it
  const token = JSON.parse(localStorageMock.getItem("token")); // Use localStorageMock here
  expect(token).toBe("accessToken");
});
