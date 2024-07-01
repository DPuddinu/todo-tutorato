import { User } from "./models/user.js";

const USERNAME_KEY = "user";
const PASS_KEY = "pass";
const CONFIRM_KEY = "confirm";
const USERS_KEY = "users";
//Funzione per prendere i dati
export function getCredentialRegister() {
  const { name, password } = getCredentialLogin();
  const passwordConfirm = document.getElementById(CONFIRM_KEY).value;
  return { name, password, passwordConfirm };
}
export function getCredentialLogin() {
  const name = document.getElementById(USERNAME_KEY).value;
  const password = document.getElementById(PASS_KEY).value;
  return { name, password };
}

export function register({ name, password, passwordConfirm }) {
  const validationErrors = validateRegister({
    name,
    password,
    passwordConfirm,
  });

  if (Object.keys(validationErrors).length !== 0) {
    alert(JSON.stringify(validationErrors));
    return;
  }

  const id = generateId();
  const newUser = new User({ id, name });

  // prendi l'oggetto users dalla key USERS_KEY, convertilo in oggetto con JSON.parse(), verifica che non sia già presente l'utente, se non è presente fai il push del nuovo utente nell'array, infine salva il nuovo array nel localstorage
  // Recupera l'oggetto users dal localStorage
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  // Verifica che l'utente non sia già presente
  const userExists = users.some((user) => user.id === newUser.id);

  if (!userExists) {
    // Aggiungi il nuovo utente all'array
    users.push(newUser);

    // Salva il nuovo array nel localStorage
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    alert("Registrazione completata!");
  }
}
//Funzione calcolo id univoco
export function generateId() {
  return Math.random() * 9999999;
}
//Funzione login
export function login() {
  // Recuperare tutti gli utenti dal localStorage
  const user = getCredentialLogin({ user });
  const users = JSON.parse(localStorage.getItem(USERS_KEY));
  // Cicla su tutti gli utenti
  for (let user of users) {
    // Verifica che ci sia un utente con nome e password corretti
    if (user.name === username && user.password === password) {
      alert("Grazie per esserti loggato!");
      return user; // Ritorna l'utente trovato
    }
  }
  // Se non trova l'utente, mostra un alert
  alert("Utente non trovato");
  return null;
}

//Funzione per controllare i dati in ingresso
export function validateRegister({ name, password, passwordConfirm }) {
  let errors = {};
  const regEx =
    "/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@.#$!%*?&])[A-Za-zd@.#$!%*?&]{8,15}$/";
  if (name.length > 10 || name.length < 3)
    errors[USERNAME_KEY] = "The username must be between 3 and 10 characters";

  if (name === "") errors[USERNAME_KEY] = "Username required";
  if (passwordConfirm === "") errors[CONFIRM_KEY] = "Confirm password required";
  if (password !== passwordConfirm && passwordConfirm !== "")
    errors[CONFIRM_KEY] = "Password don't match retype your Password";

  if (!regEx.test(password))
    errors[PASS_KEY] = "La password non include caratteri speciali";
  return errors;
}