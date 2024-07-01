import {
  getCredentialLogin,
  validateLogin,
  login,
  controlLogin,
} from "./auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const credential = getCredentialLogin();
    const validate = validateLogin(credential);

    controlLogin(validate);

    const log = login(credential);
    if (log) {
      window.location = "./homepage.html";
    }
  });
});
