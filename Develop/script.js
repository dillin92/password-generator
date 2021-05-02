// Create User Choice Criteria Variables
var lowercaseSelection = false;
var uppercaseSelection = false;
var numbersSelection = false;
var symbolsSelection = false;
var lengthSelection = 0;
var generatedPassword = '';

// Prompt user to choose criteria and link
function promptUser () {
lowercaseSelection = window.confirm('Do you want to use lowercase letters?');
uppercaseSelection = window.confirm('Do you want to use uppercase letters?');
numbersSelection = window.confirm('Do you want to use numbers?');
symbolsSelection = window.confirm('Do you want to use symbols?');
console.log(lowercaseSelection);
console.log(uppercaseSelection);
console.log(numbersSelection);
console.log(symbolsSelection);

if (lowercaseSelection === false && uppercaseSelection === false && numbersSelection === false && symbolsSelection === false) 
{
  window.confirm('Please choose at least one option'); 
  promptUser();
}

else promptLength();
}

// Prompt pw length
function promptLength () {
  

  while (lengthSelectNum < 8 || lengthSelectNum > 128 || isNaN(lengthSelectNum)) {
    lengthSelection = window.prompt('How many characters do you want in your password. It has to be between 8 and 128 characters long', "");

    var lengthSelectNum = parseInt(lengthSelection);
    console.log(lengthSelectNum);
  }

  generatePassword ();
}

// Generate password function
function generatePassword () {
  // Init pw var
  
  var lowercaseString = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var numberString = '0123456789'.split('');
  var symbolsString ='!@#$%^&*()+={}[]:;?'.split('');
  var selectionArr = [[lowercaseString],[uppercaseString],[numberString],[symbolsString]];
  var userInputArr = [lowercaseSelection, uppercaseSelection, numbersSelection, symbolsSelection];

  console.log(userInputArr);
  
  for (var i = 0; i < userInputArr.length; i++) {
    if (userInputArr[i].valueOf(i) === false) {
      selectionArr[i]=[];
    }
  }
  var chosenCriteria = selectionArr.flat(2);
  console.log(chosenCriteria);

  for (var i = 0; i < lengthSelection; i++) { 
    var randomIndex = Math.floor(Math.random() * chosenCriteria.length);
    var chosenIndex = chosenCriteria[randomIndex];
    generatedPassword += chosenIndex;
  }
  console.log(generatedPassword);
  writePassword(generatedPassword);
}

// btnGenerate = document.querySelector('btn');
var result = document.querySelector('textArea');


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(generatedPassword) {
  var password = generatedPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", promptUser);
