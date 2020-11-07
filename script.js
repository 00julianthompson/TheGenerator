// Assignment Code
var generateBtn = document.querySelector("#generate");

  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password") 
}

function generatePassword () {
  var char= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()"
  var passwordlength = 18; I
  var password= "";

  for(var i=0; i < passwordlength; i++){
    var randomnumber = math.floor(math.random() * chars.length);
    password += chars.substring(randomnumber,randomnumber+1);
  }

    return password;
}



// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);
