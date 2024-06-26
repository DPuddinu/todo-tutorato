import {
  getCredentialRegister,
  validateRegister,
  register,
  USERNAME_KEY,
  CONFIRM_KEY,
  PASS_KEY,
} from "./auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const credential = getCredentialRegister();
    const validate = validateRegister(credential);

    if (validate) {
      if (validate[USERNAME_KEY]) {
        document.getElementById("errorUser").innerHTML = validate[USERNAME_KEY];
      }
      if (validate[PASS_KEY]) {
        document.getElementById("errorPass").innerHTML = validate[PASS_KEY];
      }
      if (validate[CONFIRM_KEY]) {
        document.getElementById("errorConfi").innerHTML = validate[CONFIRM_KEY];
      }
    }
    const log = register(credential);
    if (!log) {
      window.location = "./login.html";
    }
  });
});
