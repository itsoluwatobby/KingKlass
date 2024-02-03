export const Validation_RegExp = {
  "EMAIL_REG": /^[\d\w]{1,55}@[\w]{1,10}\.[\w]{1,5}$/,
  "PASS_REG": /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!£%*?&\\\/])[A-Za-z\d@£$!%*?&]{9,60}$/
}

export const WarningTexts = {
  "conflict": "This email is already taken",
  "invalid-email": "Not a valid email",
  "no-match": "Password does not match",
  "invalid-password": "Password is too weak",
  "pass": ""
}