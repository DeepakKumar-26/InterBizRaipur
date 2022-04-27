function handleSignUpForm() {
  let fName = document.forms["form-signup"]["first-name"].value;
  localStorage.setItem("fname", fName);
}

document.getElementById("user-name").innerHTML = localStorage.getItem("fname");
