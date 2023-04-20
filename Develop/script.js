// Assignment code here
var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!','@','#','$','%','&','*','?','/','+','=',];
var lowerCassArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCassArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];

function generatePassword () {
  console.log("Hi! You clicked the button!");
}
///1. Prompt the user for the password Criteria
//     A. password length 8 < 128
//     B. lowercase, uppercase, special characters
/// 2. Need to validate the input.

function getPrompts() {
  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) { {
    alert ("Character length must be between 8 - 128 characters. Please try again.");
    return false;
  } }
  if(confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCassArr);
  }
  if(confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCassArr);
  }
  if(confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if(confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
  } 

/// 3. Display the generated password onto page.

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
