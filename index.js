const inquirer = require("inquirer");
const chalk = require("chalk");

// class genPass {
//     constructor(length, pass) {
//         this.lengthPass = lengthPass;
//         this.pass = pass;
//     }

//     generatePassword() {
//         let passString = "";
//         for (i = 0; i < lengthOfPass; i++) {
            
//             let randomChoices = this.pass[Math.floor(Math.random() * this.pass.length)];
//             let selection = randomChoices[Math.floor(Math.random() * randomChoices.length)];
            
//             passString += selection;
//         }
        
//         return new displayPassword(passString);
//     }

// }

// class displayPassword {
//     constructor (passString) {
//         this.passString = passString;
//     }

//     printInfo() {
//         console.log(`Success! Your random password is: ${this.passString}`);
//     }

// }


class newPass {

    wordLength = 0;
    passArray = [];


    constructor(wordLength, passArray) {
        this.wordLength = wordLength;
        this.passArray = passArray;
    }
        

    askLength() {
        inquirer
        .prompt(
               {
                type: "number",
                name: "passLength",
                message: "How many characters would you like your password to contain? Please choose a number between 8 and 128.",
            }
        ).then(function(val) {
            let pLength = parseInt(`${val.passLength}`);

            if ((pLength < 8) || (pLength > 128)) {
                console.log(chalk.red("Please restart and input a valid length for your password."));
                password.askLength();
            } else {
                password.askChoices();
            }

            password.wordLength = pLength;
        });

       console.log(password.wordLength); 
    }
    
    

    askChoices() {
        let arrayArray = [];

        let characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "[", "]", "<", ">", "?", ".", ","];
        let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        let bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        
        inquirer
        .prompt(
            {
                type: "checkbox",
                name: "charChoices",
                message: "\nPlease select at least one character type to include in your password:",
                choices: [
                    "Numbers", 
                    "Special Characters", 
                    "Lowercase Letters", 
                    "Uppercase Letters"
                ],
            }
        ).then(function(answers) {
            let userChoice = answers.charChoices;
    
            if(userChoice.includes("Numbers")) {
                arrayArray.push(digits)
    
            }
            
            if (userChoice.includes("Special Characters")) {
                arrayArray.push(characters)
    
            } 
            
            if (userChoice.includes("Lowercase Letters")) {
                arrayArray.push(smallLetters)
                
            } 
            
            if (userChoice.includes("Uppercase Letters")) {
                arrayArray.push(bigLetters)
                
            }

            this.passArray = arrayArray;

        });

    }
    
};



let password = new newPass();

password.askLength();