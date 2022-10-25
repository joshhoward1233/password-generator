const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const myPopUpOne = document.getElementById("myPopUpOne")
const myPopUpTwo = document.getElementById("myPopUpTwo")
const firstPassword = document.getElementById("field-text-one")
const secondPassword = document.getElementById("field-text-two")
const passwordLength = 15

document.getElementById("generateBtn").addEventListener("click", getPasswords)

// getRandomCharacter() generates a string of 15 random characters

function getRandomCharacter()   {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

// generatePasswords() creates the random passwords

function generatePasswords()    {
    let password = ""
    for (let i = 0; i < passwordLength; i++)    {
        password += getRandomCharacter()
    }
    return password
}

// getPasswords() adds randomly generated password to text field

function getPasswords() {
    firstPassword.textContent = generatePasswords()
    secondPassword.textContent = generatePasswords()
}

// The functions copyOne() and copyTwo() copy the passwords

let copyOne = document.getElementById('field-text-one');

copyOne.addEventListener('click', () => {
    let textToCopy = document.getElementById('field-text-one').innerText;
    if(navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            myPopUpOne.classList.toggle("show")
        })
    } else {
        console.log('Browser Not compatible')
    }

})

let copyTwo = document.getElementById('field-text-two');

copyTwo.addEventListener('click', () => {
    let textToCopy = document.getElementById('field-text-two').innerText;
    if(navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            myPopUpTwo.classList.toggle("show")
        })
    } else {
        console.log('Browser Not compatible')
    }

})