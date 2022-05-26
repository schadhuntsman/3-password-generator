// Assignment code here

//constants
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

//variables
const passwordText = document.getElementById("password");
const length = document.getElementById("length");
const includedNumbers = document.getElementById("numbers");
const includedSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
console.log(includedNumbers)

//writePassword btn
generateBtn.addEventListener("click", () => {
  let characters = alpha;
  includedNumbers.checked ? (characters += numbers) : "";
  includedSymbols.checked ? (characters += symbols) : "";
  passwordText.value = writePassword(length.value, characters);
});

console.log(generateBtn)

//password generator
const writePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

// //copy to clipboard
// const copyBtn = document.getElementById("copy");
// copyBtn.addEventListener("click", () => {
//   passwordText.select();
//   document.commandID("copy");
//   alert("Password Copied");
// });

// Write password to the #password input
function copyPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
