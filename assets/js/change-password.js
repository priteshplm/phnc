$('#new-password').keyup(function () {
  var isSpecialCharacter, isCapital, isDigit, isLengthMatch;
  var newPassword = $(this).val(); // get value of field
  if (newPassword.match(/[_@./#&$%!+-]/) && newPassword.length >= 1) {
    $("#special-character-check").prop("checked", true);
    isSpecialCharacter = true;
  }
  else {
    $("#special-character-check").prop("checked", false);
    isSpecialCharacter = false;
  }

  if (newPassword.match(/[A-Z]/)) {
    $("#capital-letter-check").prop("checked", true);
    isCapital = true;
  }
  else {
    $("#capital-letter-check").prop("checked", false);
    isCapital = false;
  }
  if (newPassword.match(/[0-9]/)) {
    $("#digit-check").prop("checked", true);
    isDigit = true;
  }
  else {
    $("#digit-check").prop("checked", false);
    isDigit = false;
  }
  if (newPassword.length >= 8) {
    $("#length-check").prop("checked", true);
    isLengthMatch = true;
  }
  else {
    $("#length-check").prop("checked", false);
    isLengthMatch = false;
  }
  if ((isSpecialCharacter && isCapital && isDigit && isLengthMatch) || newPassword.length == 0) {
    $("#change-password-button").prop('disabled', false);
  }
  else {
    $("#change-password-button").prop('disabled', true);
  }
});

function clearForm() {
  $('#new-password').val("");
  $('#current-password').val("");
  $('#confirm-password').val("");
  $("#special-character-check").prop("checked", false);
  $("#capital-letter-check").prop("checked", false);
  $("#digit-check").prop("checked", false);
  $("#length-check").prop("checked", false);
  $("#change-password-button").prop('disabled', false);
}