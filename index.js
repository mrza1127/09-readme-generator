// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

// using inquirer to prompt user to answer a set of questions
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("You must enter your name!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title name of your project? (Use + for spaces)',
            validate: projectInput => {
                if (projectInput) {
                    return true
                } else {
                    console.log("You must enter a project title name!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log("You must enter an email address!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the link to the github repository?',
            validate: githubInput => {
                if (githubInput) {
                    return true
                } else {
                    console.log("You must link your github repository!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your GitHub username?',
            validate: projectInput => {
                if (projectInput) {
                    return true
                } else {
                    console.log("You must enter your GitHub username!")
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Would you like to add installation instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'install',
            message: 'Provide installation instructions',
            when:  ({ confirmInstall }) => confirmInstall
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Would you like to include a test section?',
            default: true
        },
        {
            type: 'input',
            nane: 'test',
            message: 'Provide details about testing for this app',
            when: ({ confirmTest }) => confirmTest
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to enter usage instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for usage',
            when: ({ confirmUsage }) => confirmUsage
        },
        {
            type: 'input',
            name: 'license',
            message: 'Which license is this application covered under?'
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
