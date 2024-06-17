let userArray = [];
let passwordArray = [];

function register() {
  event.preventDefault();

  var user = document.getElementById("user").value;
  var password = document.getElementById("pass").value;
  var passwordRetype = document.getElementById("repass").value;

  if (user == "") {
    alert("User required.");
    return;
  } else if (password == "") {
    alert("Password required.");
    return;
  } else if (passwordRetype == "") {
    alert("Password required.");
    return;
  } else if (password != passwordRetype) {
    alert("Password don't match retype your Password.");
    return;
  } else if (userArray.indexOf(user) == -1) {
    userArray.push(user);
    passwordArray.push(password);

    alert(user + "  Thanks for registration. \nTry to login Now");

    document.getElementById("user").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("repass").value = "";
  } else {
    alert(user + " is already register.");
    return;
  }
}
function login() {
  event.preventDefault();

  var user = document.getElementById("user").value;
  var password = document.getElementById("pass").value;

  var i = userArray.indexOf(email);

  if (userArray.indexOf(email) == -1) {
    if (user == "") {
      alert("User required.");
      return;
    }
    alert("User does not exist.");
    return;
  } else if (passwordArray[i] != password) {
    if (password == "") {
      alert("Password required.");
      return;
    }
    alert("Password does not match.");
    return;
  } else {
    alert(user + " yor are login Now \n welcome to our website.");

    document.getElementById("user").value = "";
    document.getElementById("pass").value = "";
    return;
  }
}
