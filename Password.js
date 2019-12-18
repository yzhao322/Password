let generatorPassword = document.getElementById('generatepassword');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
button1.addEventListener('click', check);
button2.addEventListener('click', copyToClipboard);


generatorPassword.textContent = "Your Secure Password";
generatorPassword.style.textAlign = 'center';
generatorPassword.style.color = 'darkgrey';
generatorPassword.style.fontFamily = 'Times New Roman';
generatorPassword.style.margin = '10px';
generatorPassword.style.overflow = 'scroll';
generatorPassword.style.fontSize = '10px';

var ourCriteriaRange = ["!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\", "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "123456789"];
var askUserSpecialChar;
var askUserLowerCaseChars;
var askUserUpperChar;
var askUserNum;
var checkcriteria;
var checkC = 0;
var range = [''];
var password;
var rangeString;
var newPassword = [''];
var array =['']

alert("Confirm at least 2 types you want to use in your new password!")
function getUsersCriteria() {
    
    askUserSpecialChar = confirm("Do you like Special Charactors in your password?");
    askUserLowerCaseChars = confirm("Do you like Lower Case Charactors in your password?");
    askUserUpperChar = confirm("Do you like Upper Case Charactors in your password?");
    askUserNum = confirm("Do you like Numeric Charactors in your password?")
    checkcriteria = [askUserSpecialChar, askUserLowerCaseChars, askUserUpperChar, askUserNum];
    
    for (i = 0; i < 4; i++) {
        if (checkcriteria[i] === true) {
            checkC = checkC + 1;
        }
    }
        if (checkC < 2) {
            checkC = 0;
            alert("At least two categories needs to be choose!");
            getUsersCriteria();
        }
        else {
            console.log(checkcriteria);
            console.log(checkC);
        }
    
}
getUsersCriteria();
getLength();
function getLength() {
    askUserLength = prompt("Please choose your password length (must be a number between 8 and 128)");
    passwordLength = parseInt(askUserLength);
    if (Number.isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a number (between 8 and 128)!");
    }
    else {
        generatorpasswordRange();
    }
}
console.log(ourCriteriaRange[0]);
console.log(checkcriteria[0]);
generatorpasswordRange();
function generatorpasswordRange() {
    for (var i = 0; i < 4; i++) {
        if (checkcriteria[i] === true) {
            range += ourCriteriaRange[i];
            array[i] = ourCriteriaRange[i];
            console.log(range);
            console.log(array);
            generator();
        }
    }
}
            
function generator() {
    
    for (var i = 0; i < passwordLength; i++) {
        var rand = Math.floor(Math.random() * (range.length));
        newPassword[i] = range[rand];
    }
        console.log(newPassword);
        password = newPassword.toString().replace(/,/g, "");
        console.log(password);
    
}
function callNewPassword() {
    alert("Press (Generate Password) button to create your new password!");
}
for (i = 0; i < checkC ; i++)
    if (password.indexOf(array[i]) !== -1) {
    
}
else {
    generator();
}
callNewPassword();
function check() {
    generatorPassword.textContent = password;    
}

function copyToClipboard() {
    var dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = password;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert('Your new password is copied to clipboard!');
}
