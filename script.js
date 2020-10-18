// Assignment Code
var generateBtn = document.querySelector("#generate");
var numericChar = "0123456789";
var specialChar = " !@#$%^&*()_-+=;'\:<,./>?[]`~{}|";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";

// promt requesting how long of a password
var passwordLength = window.prompt("How long would you like your password? Must be between 8-128 caracters");

while (passwordLength < 8 || passwordLength > 128) {
	// alert if incorrect amount of characters is selected
	alert("please select between 8-128 characters");
	passwordLength = prompt("How long would you like your password? Must be between 8-128 caracters");
};

// var for choosing which characters for password
var lowercaseConfirm = confirm("Would you like lowercase characters? ");
var specialCharConfirm = confirm("Would you like special characters? ");
var numericCharConfirm = confirm("Would you like numerical characters? ");
	
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
	console.log(password);
	console.log(passwordText);
	console.log(passwordLength);
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// adding funtion to genereate a password
 function generatePassword() {

	// If statement for characters
	if (passwordLength >=8 && passwordLength <=128 && lowercaseConfirm && specialCharConfirm && numericCharConfirm) {
			var all = numericChar + specialChar + lowercaseChar;
			var tempPasswordString = "";
			for (var i = 0; i < passwordLength; i++) {
				var character = all.charAt(Math.floor(Math.random() * passwordLength));
				console.log(character);
				
				tempPasswordString += character;
				console.log(tempPasswordString);
				
			};

	};
	 
	 return tempPasswordString;
};