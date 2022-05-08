// Assignment Code
var generateBtn = document.querySelector("#generate");

// Get data that you need for program

var hasUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
var hasLowercase = 'abcdefghijklmnopqrstuvwxyz'.split('')
var hasNumerals = '0123456789'.split('')
var hasSymbols = '!@#$%&?~'.split('')
var password = "";
var validPasswordCharacters = []

function generatePassword(){
  //logic to check if the user wants the right length, which character they want, etc 
  var passwordLength = Number.parseInt(prompt("How many characters would you like your password to contain?"), input, 10);
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.");
    var input = prompt("How many characters would you like your password to contain?");
    passwordLength = Number.parseInt(input, 10);
    console.log(passwordLength);
  }
  //these three variables need a while loop
  // If they say yes or if True store uppercase Letter array into valid PasswordCharacter array
  // If not true do nothing 
  var hasUppercase = confirm("Do you want your password to contain uppercase letters?");
    if (hasUppercase === true || hasUppercase === "null") {
      validPasswordCharacters.push(hasUppercase);
      console.log(hasUppercase);
      
    }
     // If they say yes or if True store lowercase Letter array into valid PasswordCharacter array
  var hasLowercase = confirm("Do you want your password to contain lowercase letters?");
    if (hasLowercase === true || hasLowercase === "null") {
      console.log(hasLowercase);
      validPasswordCharacters.push(hasLowercase);
    }
  // If they say yes or if True store numbers string array into valid PasswordCharacter array
  var hasNumerals = confirm("Do you want numbers in your password?");
  if (hasNumerals === true || hasNumerals === "null") {
    console.log(hasNumerals);
    validPasswordCharacters.push(hasNumerals);

  }
  // If they say yes or if True store symbols array into valid PasswordCharacter array
  var hasSymbols = confirm("Do you want symbols in your password?");
  if (hasSymbols === true || hasSymbols === "null") {
    console.log(hasSymbols);
    validPasswordCharacters.push(hasSymbols);
  }
  
  for (var i = 0; i < passwordLength; i++) {
  var characterIndex = Math.floor(Math.random() * validPasswordCharacters.length)
  password += validPasswordCharacters[characterIndex];
  return password
  }

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

