const form = document.getElementById("form__passwordInfo");
const submitForm = document.getElementById("generatePassword");

let passwordsGenerated = [];
let passwordsDisplay = document.getElementById("generatedPasswords");
let copyPasswordsButton = document.getElementById("copy_passwrd");

let passwrdLength;
let passwrdNumbers;
let passwrdSymbols;
let passwrdLowercase;
let passwrdUppercase;
let passwrdAmbiguous;


const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const symbols = ["@", "#", "$", "%", "^", "&", "*"];
const lowercaseLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
const uppercaseLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
const ambiguousCharacters = ["[", "]", "{", "}", ";", ":", ",", "<", ".", ">", "/", "?", "!", "|"]


function generatePassword() {

  let password = ''
  let charset = getCharset();
  passwrdLength = document.getElementById("length").value;


  for (let i = 0; i < passwrdLength; i++) {

    let index = Math.floor(Math.random() * charset.length);

    password += charset[index];

  }


  return password;


}


function getCharset() {

  passwrdNumbers = document.getElementById("numbers").checked;
  passwrdSymbols = document.getElementById("symbols").checked;
  passwrdLowercase = document.getElementById("lowercase").checked;
  passwrdUppercase = document.getElementById("uppercase").checked;
  passwrdAmbiguous = document.getElementById("ambiguous").checked;



  let charset = [];


  if (passwrdNumbers == true) {
    charset.push(...numbers);
  }
  if (passwrdSymbols == true) {
    charset.push(...symbols);
  }
  if (passwrdLowercase == true) {
    charset.push(...lowercaseLetters);
  }
  if (passwrdUppercase == true) {
    charset.push(...uppercaseLetters);
  }
  if (passwrdAmbiguous == true) {
    charset.push(...ambiguousCharacters);
  }

  return charset;

}


function displayPasswords(e) {

  // ! Can generate more passwords here 

  e.preventDefualt;


  passwordsDisplay.value = `${generatePassword()}`

}


submitForm.addEventListener("click", displayPasswords);




// COPY to clipboard

function copyPasswords(e) {

  passwordsDisplay.select();
  passwordsDisplay.setSelectionRange(0, 99999);

  document.execCommand("copy");

}


copyPasswordsButton.addEventListener("click", copyPasswords);

