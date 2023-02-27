const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

//Manager prompts
const addManager = function () {
    //Name
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Enter team manager'
    validate: nameEntry => {
            if (nameEntry) {
                return true;
            } else {
                console.log("Enter the managers name");
                return false;
            }
        }
    },
    //ID
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the employee id number',
        validate: nameEntry => {
            if (isNaN(nameEntry)) {
                console.log("Please enter the Manager ID")
                return false;
            } else {
                return true
            }
        }
    },
    //Email
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the employee email address',
    },

    // Office number
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter the employee office number',
        validate: nameEntry => {
            if (isNaN(nameEntry)) {
                console.log("Please enter the Manager Office Number")
                return false;
            } else {
                return true
            }
        }
    }]).then(managerEntry => {
        const { name, id, email, officeNumber } = managerEntry;
        const manager = new Manager (name, id, email, officeNumber);
        // populate manager info
        // promptForNexEmployee ()
    })
    //Employee prompts
    const promptForNextEmployee = () => {
        inquirer.prompt([{
            // choice of 3
        }]).then(response => {
            if (this.engineer) {
                promptForEngineer
            } else if (this.Intern) {
                promptForIntern
            } else {use the functionality from page - template to generate the team }

            //    promptForEngineer
            // else if intern
            //    promptForIntern
            // else
            //    use the functionality from page-template to generate the team
        })
    }

    const promptForEngineer = () => {
        inquirer.prompt([{
            //engineer questions
        }]).then(response => {
            // add new engineer to employees array
            // promptForNextEmployee
        })
    }

    const promptForIntern = () => {
        inquirer.prompt([{
            //intern questions
        }]).then(response => {
            // add new intern to employees array
            // promptForNextEmployee
        })
    }

    const buildPage = () => {
        // render(myArrayOfTeamMembers)
    }

    const promptForManager = () => {
        inquirer.prompt([{
            //Manager questions
        }]).then(response => {
            // add new manager to employees array
            // promptForNextEmployee
        })
    }

    const buildPage = () => {
        //generate new HTMl and drop the string in there 
    }

// // TODO: Write Code to gather information about the development team members, and render the HTML file.

