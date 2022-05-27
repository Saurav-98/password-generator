let passwordLength = 10;
const passwordEl1 = document.getElementById("password-field-1");
const passwordEl2 = document.getElementById("password-field-2");
const passwordEl3 = document.getElementById("password-field-3");
const passwordEl4 = document.getElementById("password-field-4");
const passwordLengthEl = document.getElementById("password-length");
const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const capitalAlphabets = alphabets.map((a) => a.toUpperCase());
let symbols = `~! @#$%^&*()_-+={[}]|\:;"'<,>.?/`;
let specialCharacters = [];
for (s in symbols) {
  specialCharacters.push(symbols[s]);
}

const charSet = alphabets.concat(digits, specialCharacters, capitalAlphabets);

function createPassword(len) {
  let password = "";
  for (let i = 0; i < len; i++) {
    let randomChoice = Math.floor(Math.random() * charSet.length);
    password += charSet[randomChoice];
  }
  return password;
}

console.log(createPassword(passwordLength));

function renderPassword() {
  if (passwordLengthEl.value) {
    passwordLength = passwordLengthEl.value;
  } else {
    passwordLength = 10;
  }
  passwordEl1.value = createPassword(passwordLength);
  passwordEl2.value = createPassword(passwordLength);
  passwordEl3.value = createPassword(passwordLength);
  passwordEl4.value = createPassword(passwordLength);
}

function copyFunction1() {
  passwordEl1.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(passwordEl1.value);
  alert("Copied the text: " + passwordEl1.value);
}

function copyFunction2() {
  passwordEl2.select();
  navigator.clipboard.writeText(passwordEl2.value);
  alert("Copied the text: " + passwordEl2.value);
}

function copyFunction3() {
  passwordEl3.select();
  navigator.clipboard.writeText(passwordEl3.value);
  alert("Copied the text: " + passwordEl3.value);
}

function copyFunction4() {
  passwordEl4.select();
  navigator.clipboard.writeText(passwordEl4.value);
  alert("Copied the text: " + passwordEl4.value);
}
