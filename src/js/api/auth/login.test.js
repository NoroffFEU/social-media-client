import { login } from "./login.js"
import { apiPath } from "../constants.js"
import { userTestCases } from "./__Mocks__/userData.mock.js"
import { mockFetch } from "./__Mocks__/fetch.mock.js"
import { save } from "../../storage/index.js"

global.fetch = jest.fn()

jest.mock("../headers.js", () => ({
      headers: jest.fn((contentType) => {
            if (contentType === "application/json") {
                  return { "Content-Type": "application/json" }
            }
            throw new Error("Invalid content type")
      }),
}))

jest.mock("../../storage/index.js", () => ({
      save: jest.fn(),
}))

describe("login function test", () => {
      beforeEach(() => {
            jest.clearAllMocks()
      })

      // Assuming `userTestCases` might contain both success and failure cases
      userTestCases.forEach(
            ({
                  desc,
                  email,
                  password,
                  fetchMock,
                  expectedSaveCalls,
                  expectedProfile,
                  expectError,
            }) => {
                  if (!expectError) {
                        it(`logs in a user successfully for ${desc}`, async () => {
                              mockFetch(fetchMock)

                              const profile = await login(email, password)
                              console.log(profile)
                              expectedSaveCalls.forEach(([key, value]) => {
                                    expect(save).toHaveBeenCalledWith(
                                          key,
                                          value
                                    )
                              })

                              expect(profile).toEqual(expectedProfile)

                              expect(fetch).toHaveBeenCalledWith(
                                    `${apiPath}/social/auth/login`,
                                    {
                                          method: "post",
                                          body: JSON.stringify({
                                                email,
                                                password,
                                          }),
                                          headers: {
                                                "Content-Type":
                                                      "application/json",
                                          },
                                    }
                              )
                        })
                  }

                  if (expectError) {
                        it(`handles login failure correctly for ${desc}`, async () => {
                              mockFetch(fetchMock)

                              await expect(
                                    login(email, password)
                              ).rejects.toThrow(fetchMock.statusText)

                              expect(fetch).toHaveBeenCalledWith(
                                    `${apiPath}/social/auth/login`,
                                    {
                                          method: "post",
                                          body: JSON.stringify({
                                                email,
                                                password,
                                          }),
                                          headers: {
                                                "Content-Type":
                                                      "application/json",
                                          },
                                    }
                              )
                        })
                  }
            }
      )
})
