// Assignment Code
var generateBtn = document.querySelector("#generate");
var numericChar = "0123456789";
var specialChar = " !@#$%^&*()_-+=;'\:<,./>?[]`~{}|";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

  var passwordLength = prompt ("How long would you like your password? Must be between 8-128 caracters");

  while (passwordLength < 8 || passwordLength > 128) 
  {
// alert if incorrect amount of characters is selected
    alert("please select between 8-128 characters");
    passwordLength = prompt("How long would you like your password? Must be between 8-128 caracters");
  };
// var for choosing which characters for password
  var lowercaseConfirm = confirm("Would you like lowercase characters? ");
  var specialCharConfirm = confirm("Would you like special characters? ");
  var numericCharConfirm = confirm("Would you like numerical characters? ");


// promt requesting how long of a password
 

// adding funtion to genereate a password
 function generatePassword() {


// If statement for characters
  if (passwordLength >=8 && passwordLength <=128 && lowercaseConfirm && specialCharConfirm && numericCharConfirm) {
    function generate(length = passwordLength) {
      var all = numericChar + specialChar + lowercaseChar;
        for (var i = 0; i , length; i++) {
          var character = Math.floor(Math.random() * all, length);
        };
    };
  };
 };