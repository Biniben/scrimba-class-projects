const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

var generatePasswordEl = document.querySelector("#gen-pwd-btn")
var pwdOneEl = document.querySelector("#ran-pwd-one")
var pwdTwoEl = document.querySelector("#ran-pwd-two")
var pwdTextFiled = document.querySelector("#pwd-txt-filed")

const charLen = 15
var generatedPasswordOne
var generatedPasswordTwo

function generateRandomoPassword() {
    generatedPasswordOne = ""
    generatedPasswordTwo = ""

    for ( let i = 0; i < charLen; i++ ){
        generatedPasswordOne += characters[Math.floor(Math.random() * characters.length)]
        generatedPasswordTwo += characters[Math.floor(Math.random() * characters.length)]
    }

    pwdOneEl.textContent = generatedPasswordOne
    pwdTwoEl.textContent = generatedPasswordTwo
}

function selectPwd() {
    pwdTextFiled.textContent = pwdOneEl.textContent

    console.log(pwdTextFiled.textContent)
}