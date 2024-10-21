import { onLogin } from "../../ui/auth/login";

const form = document.forms.login;

form.addEventListener("submit", onLogin);
