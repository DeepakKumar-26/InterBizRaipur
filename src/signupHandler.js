function handleSignUpForm() {
  let firstName = document.forms["form-signup"]["first-name"].value;
  let lastName = document.forms["form-signup"]["last-name"].value;
  localStorage.setItem("fname", firstName);
  localStorage.setItem("lname", lastName);
}
