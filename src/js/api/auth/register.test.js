import { register } from "./register";
import fetchMock from "jest-fetch-mock";

beforeEach(() => {
  fetchMock.resetMocks();
});

register("register function", () => {
  it("should register user successfully", async () => {
    const mockResponse = { userId: 12345 };
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const name = "Olga G";
    const email = "olga.g@example.com";
    const password = "password123";
    const avatar = "avatar-url";

    const response = await register(name, email, password, avatar);

    expect(fetchMock).toHaveBeenCalledWith(expect.any(String), {
      method: "post",
      body: JSON.stringify({ name, email, password, avatar }),
      headers: { "Content-Type": "application/json" },
    });
    expect(response).toEqual(mockResponse);
  });

  it("should throw error if registration fails", async () => {
    const mockErrorResponse = { error: "Registration failed" };
    fetchMock.mockResponseOnce(JSON.stringify(mockErrorResponse), {
      status: 400,
    });

    const name = "Olga G";
    const email = "olga.g@example.com";
    const password = "password123";
    const avatar = "avatar-url";

    await expect(register(name, email, password, avatar)).rejects.toThrow(
      "Registration failed"
    );
  });
});
