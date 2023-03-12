function submitForm() {
  // Get the form input fields
  var emailInput = document.getElementById("email");
  var nameInput = document.getElementById("name");
  var idInput = document.getElementById("ciwd");
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirmPassword");

  // Get the input field values
  var emailValue = emailInput.value;
  var nameValue = nameInput.value;
  var idValue = idInput.value;
  var passwordValue = passwordInput.value;
  var confirmPasswordValue = confirmPasswordInput.value;

  // Define the regex patterns
  var emailPattern = /^[a-zA-Z0-9._%+-]+@csu\.fullerton\.edu$/;
  var namePattern = /^[a-zA-Z]+$/;
  var idPattern = /^\d{8}$/;
  var passwordPattern = /^[a-zA-Z0-9_@#$%^&+=-]{8,}$/;

  // Check if the input values match the regex patterns
  if (!namePattern.test(nameValue)) {
    // Display an error message
    var errorMessage = "Please enter a valid name";
    nameInput.setCustomValidity(errorMessage);
    nameInput.addEventListener('input', function() {
      nameInput.setCustomValidity('');
    });
    return false;
  } else if (!emailPattern.test(emailValue)) {
    // Display an error message
    var errorMessage = "Please enter a valid email address with the domain 'csu.fullerton.edu'.";
    emailInput.setCustomValidity(errorMessage);
    emailInput.addEventListener('input', function() {
      emailInput.setCustomValidity('');
    });
    return false;
  } else if (!idPattern.test(idValue)) {
    // Display an error message
    var errorMessage = "Please enter 8 digits";
    idInput.setCustomValidity(errorMessage);
    idInput.addEventListener('input', function() {
      idInput.setCustomValidity('');
    });
    return false;
  } else if (!passwordPattern.test(passwordValue)) {
    // Display an error message
    var errorMessage = "Please enter a password with at least 8 characters, including letters, numbers, and special characters (@,#,$,%,^,&,+,=,-,_)";
    passwordInput.setCustomValidity(errorMessage);
    passwordInput.addEventListener('input', function() {
      passwordInput.setCustomValidity('');
    });
    return false;
  } else if (passwordValue !== confirmPasswordValue) {
    // Display an error message
    var errorMessage = "Passwords do not match";
    confirmPasswordInput.setCustomValidity(errorMessage);
    confirmPasswordInput.addEventListener('input', function() {
      confirmPasswordInput.setCustomValidity('');
    });
    return false;
  } else {
    // Reset the custom validity message and submit the form
    nameInput.setCustomValidity("");
    emailInput.setCustomValidity("");
    idInput.setCustomValidity("");
    passwordInput.setCustomValidity("");
    confirmPasswordInput.setCustomValidity("");

    // Reset the form values
    document.getElementById("myForm").reset();
    return true;
  }
}
