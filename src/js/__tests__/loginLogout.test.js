// src/js/__tests__/loginLogout.test.js

import { login } from "js/api/auth/login";
import { logout } from "js/api/auth/logout";
import { jest } from "@jest/globals";

// Mock localStorage
global.localStorage = {
	getItem: jest.fn(),
	setItem: jest.fn(),
	removeItem: jest.fn(),
};

// Spy on save and remove
jest.mock("js/storage/index", () => {
	return {
		save: jest.fn(),
		remove: jest.fn(),
		load: jest.fn(),
	};
});

describe("Authentication Functions", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe("login function", () => {
		it("stores a token and profile when valid credentials", async () => {
			const mockResponse = {
				accessToken: "mockToken",
				name: "mockName",
			};

			global.fetch = jest.fn(() =>
				Promise.resolve({
					ok: true,
					json: () => Promise.resolve(mockResponse),
				}),
			);

			const profile = await login(
				"testeren123@stud.noroff.no",
				"OppgavePassord1",
			);

			expect(global.localStorage.setItem).toHaveBeenCalledWith(
				"token",
				JSON.stringify("mockToken"),
			);
			expect(global.localStorage.setItem).toHaveBeenCalledWith(
				"profile",
				JSON.stringify({ name: "mockName" }),
			);
			expect(profile).toEqual({ name: "mockName" });
		});

		it("throws an error when provided with invalid credentials", async () => {
			global.fetch = jest.fn(() =>
				Promise.resolve({
					ok: false,
					statusText: "Unauthorized",
				}),
			);

			await expect(login("test@noroff.no", "wrongpassword")).rejects.toThrow(
				"Unauthorized",
			);
		});
	});

	describe("logout function", () => {
		it("clears token and profile from storage", () => {
			logout();

			expect(global.localStorage.removeItem).toHaveBeenCalledWith("token");
			expect(global.localStorage.removeItem).toHaveBeenCalledWith("profile");
		});
	});
});
