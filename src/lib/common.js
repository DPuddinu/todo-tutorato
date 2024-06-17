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
