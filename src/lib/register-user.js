import {
  getCredentialRegister,
  validateRegister,
  register,
  controlRegister,
} from "./auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const credential = getCredentialRegister();
    const validate = validateRegister(credential);

    controlRegister(validate);

    const log = register(credential);
    if (log) {
      window.location = "./homepage.html";
    }
  });
});
