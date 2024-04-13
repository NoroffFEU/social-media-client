export const userTestCases = [
      {
            desc: "valid user data",
            email: "test@example.com",
            password: "password123",
            fetchMock: {
                  ok: true,
                  json: async () => ({
                        accessToken: "mockedAccessToken",
                        user: { id: "666", name: "UserOne" },
                  }),
            },
            expectedSaveCalls: [
                  ["token", "mockedAccessToken"],
                  ["profile", { user: { id: "666", name: "UserOne" } }],
            ],
            expectedProfile: {
                  user: { id: "666", name: "UserOne" },
            },
            expectError: false,
      },
      {
            desc: "Unvalid user data",
            email: "test@example.com",
            password: "password123",
            fetchMock: {
                  ok: false,
                  json: async () => ({
                        accessToken: "",
                        user: { id: "", name: "" },
                  }),
            },
            expectedSaveCalls: [
                  ["token", ""],
                  ["profile", { user: { id: "", name: "" } }],
            ],
            expectedProfile: {
                  user: { id: "", name: " " },
            },
            expectError: true,
      },
]
