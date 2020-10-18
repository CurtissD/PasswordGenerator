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

//create variable for password possible characters
let all;
//if statement for user password caracter selections
 if (lowercaseConfirm && specialCharConfirm && numericCharConfirm) {
		all = numericChar + specialChar + lowercaseChar;
 } else if (lowercaseConfirm && specialCharConfirm == false && numericCharConfirm) {
	  	all = numericChar + lowercaseChar;
 } else if (lowercaseConfirm && specialCharConfirm && numericCharConfirm == false) {
	 	all =  specialChar + lowercaseChar;
 } else if (lowercaseConfirm && specialCharConfirm == false && numericCharConfirm == false) {
	 	all =  lowercaseChar;
 } else if (lowercaseConfirm == false && specialCharConfirm && numericCharConfirm) {
	 	all = numericChar + specialChar;
 } else if (lowercaseConfirm == false && specialCharConfirm == false && numericCharConfirm) {
	 	all = numericChar;
 } else if (lowercaseConfirm == false && specialCharConfirm && numericCharConfirm == false) {
	 	all = specialChar;
 } else if (lowercaseConfirm == false && specialCharConfirm == false && numericCharConfirm == false) {
	 	all = null;
 };
	 
// funtion to genereate a password
 function generatePassword() {
	//if statement to check for all variable value
	if (all !== null) {
			var tempPasswordString = "";
			for (var i = 0; i < passwordLength; i++) {
				var character = all.charAt(Math.floor(Math.random() * passwordLength));
				tempPasswordString += character;
			};
	} else if (all == null) {
		alert ("Please select OK on one or more prompts.");
		location.reload();
	}
	 
	 return tempPasswordString;
};
