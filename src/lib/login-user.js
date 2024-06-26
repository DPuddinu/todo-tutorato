import {
  getCredentialLogin,
  validateLogin,
  login,
  USERNAME_KEY,
  PASS_KEY,
} from "./auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const credential = getCredentialLogin();
    const validate = validateLogin(credential);

    if (validate) {
      if (validate[USERNAME_KEY]) {
        document.getElementById("errorUser").innerHTML = validate[USERNAME_KEY];
      }
      if (validate[PASS_KEY]) {
        document.getElementById("errorPass").innerHTML = validate[PASS_KEY];
      }
    }
    const log = login(credential);
    if (!log) {
      window.location = "./index.html";
    }
  });
});
