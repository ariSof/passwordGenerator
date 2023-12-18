//Initialize variables
var length = 8;
var isLowercase = false;
var isUppercase = false;
var isNumeric = false;
var isSpecial = false;

//Initialize arrays
var lcLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var capLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialChars = ["!","@","#","$","%","&","*"];


function generatePassword() {
  var pswd = '';
  var passwordArray = [];
  length = prompt("Plese select your password criteria. \nHow long of a password would you like? (8-128)", "8");
  isLowercase = prompt("Would you like lowercase letters? (y/n)", "y");
  isUppercase = prompt("Would you like Capital letters? (y/n)", "n");
  isNumeric = prompt("Would you like numbers in your password? (y/n)", "n");
  isSpecial = prompt("wWould you like special characters? (y/n)", "n");

  //for each true item, append array to create a bigger array to meet password criteria
  if(isLowercase === 'y') {
    passwordArray = passwordArray.concat(lcLetters);
  }

  if(isUppercase === 'y') {
    passwordArray = passwordArray.concat(capLetters);
  }

  if(isNumeric === 'y') {
    passwordArray = passwordArray.concat(numbers);
  }

  if(isSpecial === 'y') {
    passwordArray = passwordArray.concat(specialChars);
  }

  if(length < 8) {
    length = 8;
  }

  if(length > 128) {
    length = 128;
  }


  //Depending on length of password wanted randomly generate pswd
  for(var i=0; i<length; i++){
    var randomIndex = Math.floor(Math.random() * passwordArray.length);
    pswd = pswd + passwordArray[randomIndex];
  }
  return pswd;

}

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
