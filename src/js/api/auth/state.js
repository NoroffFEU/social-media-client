import { load } from "../../storage/index.js";

export const isLoggedIn = () => Boolean(load("token"));

export const profile = () => load("profile");