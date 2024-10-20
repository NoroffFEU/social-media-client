import { login } from "./login.js"
import localStorageMock from "../auth/localStorageMock"

/* global global */
global.localStorage = localStorageMock

const createMockFetch = ({ success = true, data = {} } = {}) => {
  return jest.fn(() => {
    let response = {
      ok: success,
      statusText: "OK",
      json: () => Promise.resolve(data),
    }

    if (success) {
      response.status = 200
    } else {
      response.status = 404
      response.statusText = "Invalid credentials"
      delete response.json
    }

    return Promise.resolve(response)
  })
}

describe("Login function test", () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it("fetches and saves token key and checks if the token is correct and email is correct", async () => {
    const mockData = {
      email: "workflow@work.flow",
      password: "wolfkrow",
      accessToken: "accessToken",
      value: "accessTokenMockValue",
    }
    global.fetch = createMockFetch({ success: true, data: mockData })
    const data = await login("workflow@work.flow", "wolfkrow")

    expect(localStorage.getItem("token")).toEqual('"accessToken"')
    expect(JSON.parse(localStorage.getItem("profile")).email).toBe(data.email)
  })

  it("deletes the token value", async () => {
    global.fetch = createMockFetch({
      success: true,
      data: { accessToken: "accessToken" },
    })
    const data = await login("workflow@work.flow", "wolfkrow")
    expect(localStorage.getItem(data.accessToken)).toEqual(null)
  })

  it("throws error on invalid credentials", async () => {
    global.fetch = createMockFetch({ success: false })
    await expect(login("notanEmail", "notApassword")).rejects.toThrow(
      "Invalid credentials",
    )
  })
})