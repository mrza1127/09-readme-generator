// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs')

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
            validate: titleInput => {
                if (titleInput) {
                    return true
                } else {
                    console.log("You must enter a project title name!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true
                } else {
                    console.log("You must enter a project description!")
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
            name: 'link',
            message: 'What is the link to the github repository?',
            validate: linkInput => {
                if (linkInput) {
                    return true
                } else {
                    console.log("You must link your github repository!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
            validate: usernameInput => {
                if (usernameInput) {
                    return true
                } else {
                    console.log("You must enter your GitHub username!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Provide installation instructions',
        },
        {
            type: 'input',
            nane: 'test',
            message: 'Provide details about testing for this app',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for usage',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license is this application covered under?',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'ISC', 'None']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide instructions for contributing to this project',
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            // if error, reject promise and .catch the error
            if (err) {
                reject(err)
                return
            }
            // resolve if no error
            resolve({
                ok: true,
                message: 'file created'
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    askQuestions()
    .then(readmeData => {
        console.log(readmeData)
        return generateMarkdown(readmeData)
    })
    .then(readmeMarkdown => {
        return writeToFile('./dist/readme.md', readmeMarkdown)
    })
    .catch(err => {
        console.log(err)
    })
}

// Function call to initialize app
init();
