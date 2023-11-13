import { login } from "./login"

const storageFix = {
	getItem: jest.fn(),
	setItem: jest.fn(),
	clear: jest.fn(),
}
global.localStorage = storageFix


describe("login", () => {
	it("retrieve something", async () => {
		const userName = "tulling@stud.noroff.no"
		const pWord = "tulling1234"
  
		const data = await login(userName, pWord)
  
		expect(typeof data).toBe("object")
	})
  
	it("place token in local storage", async () => {
		localStorage.setItem("token", "dummyToken")
		const userName = "tulling@stud.noroff.no"
		const pWord = "tulling1234"
  
		await login(userName, pWord)
  
		const accessToken = localStorage.getItem("token")
		expect(accessToken).not.toBeNull()
	})
})