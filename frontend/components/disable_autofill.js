const disableAutofill = $("#login_form").disableAutoFill({
  passwordField: ".password",
  debugMode: false,
  randomizeInputName: true,
  callback: function() {
    return checkForm();
  }
});

function checkForm() {
  form = document.getElementById("login-form");

  if (form.password.value == "") {
    alert("Cannot leave Password field blank.");
    form.password.focus();
    return false;
  }
  if (form.username.value == "") {
    alert("Cannot leave User Id field blank.");
    form.username.focus();
    return false;
  }
  return true;
}

export default disableAutofill;
