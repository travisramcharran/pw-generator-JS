// Assignment Code
var generateBtn = document.querySelector("#generate");

// Get data for program

var Uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
var Lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('')
var Numerals = '0123456789'.split('')
var Symbols = '!@#$%&?~'.split('')
var password = "";
var validPasswordCharacters = []

function generatePassword() {
  //logic to check if the user wants the right length and which characters they want.
  var passwordLength = Number.parseInt(prompt("How many characters would you like your password to contain?"), input, 10);
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.");
    var input = prompt("How many characters would you like your password to contain?");
    passwordLength = Number.parseInt(input, 10);
    console.log(passwordLength);
  }

  // If they say yes or if True store uppercase Letter array into valid PasswordCharacter array
  // If not true do nothing
  var hasUppercase = confirm("Do you want your password to contain uppercase letters?");
    if (hasUppercase) {
      validPasswordCharacters.push(...Uppercase);
      console.log(validPasswordCharacters);
    }
  
     // If they say yes or if True store lowercase Letter array into valid PasswordCharacter array
  var hasLowercase = confirm("Do you want your password to contain lowercase letters?");
    if (hasLowercase) {
      validPasswordCharacters.push(...Lowercase);
      console.log(validPasswordCharacters);
    }
    
  // If they say yes or if True store numbers string array into valid PasswordCharacter array
  var hasNumerals = confirm("Do you want numbers in your password?");
  if (hasNumerals) {
    validPasswordCharacters.push(...Numerals);
    console.log(validPasswordCharacters);
  }
    
  // If they say yes or if True store symbols array into valid PasswordCharacter array
  var hasSymbols = confirm("Do you want symbols in your password?");
  if (hasSymbols) {
    validPasswordCharacters.push(...Symbols);
    console.log(validPasswordCharacters);
  }
  // for loop to generate the 'randomness'
  for (var i = 0; i < passwordLength; i++) {
  var characterIndex = Math.floor(Math.random() * validPasswordCharacters.length)
  password += validPasswordCharacters[characterIndex];
  }
  return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);