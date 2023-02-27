const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { default: ExpandPrompt } = require("inquirer/lib/prompts/expand");
const { resolve } = require("path");

//Array to house employee info
const devTeamArray = []

//Manager prompts
const addManager = function () {
    //Name
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Enter team manager',
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
        //manager variables
        const { name, id, email, officeNumber } = managerEntry;
        const manager = new Manager(name, id, email, officeNumber);

        devTeamArray.push(manager);
        console.log(manager);
    })
};

//addManager()
//Employee prompts
//promptForNexEmployee ()
const promptForNextEmployee = function () {
    return inquirer.prompt([{
        type: "list",
        message: "Select which employee you wish to add next",
        name: "nextEmployee",
        choices: [
            "Engineer",
            "intern",
            {
                name: "There are no more employees to add",
                value: false
            }
        ]
    },
    //Engineer name
    {
        message: "what is the Engineer's name?",
        name: "name",
        when: ({ nextEmployee }) => nextEmployee === "Engineer"
    },
    //Interns name
    {
        message: "what is the Intern's name?",
        name: "name",
        when: ({ nextEmployee }) => nextEmployee === "Intern"
    },
    //Engineer ID
    {
        message: "what is the Engineer's ID?",
        name: "id",
        when: ({ nextEmployee }) => nextEmployee === "Engineer"
    },
    //Intern ID
    {
        message: "what is the Intern's ID?",
        name: "id",
        when: ({ nextEmployee }) => nextEmployee === "Intern"
    },

    //Engineer Email
    {
        message: "what is the Engineer's Email?",
        name: "email",
        when: ({ nextEmployee }) => nextEmployee === "Engineer"
    },
    //Intern Email
    {
        message: "what is the Intern's Email?",
        name: "email",
        when: ({ nextEmployee }) => nextEmployee === "Intern"
    },

    //Engineer Github
    {
        message: "what is the Engineer's GitHub user info?",
        name: "github",
        when: ({ nextEmployee }) => nextEmployee === "Engineer"
    },

    //Intern School
    {
        message: "where did the intern go to school?",
        name: "school",
        when: ({ nextEmployee }) => nextEmployee === "Intern"
    }
    ]).then(response => {
        if (response.nextEmployee) {
            switch (response.nextEmployee) {
                case "Engineer":
                    const engineer = new Engineer(response.name, response.id, response.email, response.github);
                    devTeamArray.push(engineer);
                    break;
                case "Intern":
                    const intern = new intern(response.name, response.id, response.email, response.school);
                    devTeamArray.push(intern);
                    break;
            }
            return promptForNextEmployee().then(() => resolve());
        } else {
            return resolve();
        }
    })
}

addManager().then(() => {
    return promptForNextEmployee();
});
