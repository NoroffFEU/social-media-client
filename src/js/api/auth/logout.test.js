// Import the necessary modules and functions
import { logout } from "./logout"
import { remove } from "../../storage/index.js"

jest.mock("../../storage/index.js", () => ({
      remove: jest.fn(),
}))

describe("logout function", () => {
      beforeEach(() => {
            jest.clearAllMocks()
      })

      it("should remove the user's token and profile from storage", () => {
            logout()

            expect(remove).toHaveBeenCalledWith("token")
            expect(remove).toHaveBeenCalledWith("profile")
            expect(remove).toHaveBeenCalledTimes(2)
      })
})
