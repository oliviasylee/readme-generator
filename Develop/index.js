// Packages and module needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown  = require('./utils/generateMarkdown.js')

// Provide a series of questions to guide the user in creating the README.md file
inquirer
.prompt([
    {   type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
    },
    {   type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    },
    {   type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {   type: 'input',
        name: 'description',
        message: "Enter your project description here:"
    },
    {   type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation?',
    },
    {   type: "input",
        name: "usage",
        message: "Instructions for usage:"
    },
    {
        type: 'rawlist',
        name: 'license',
        message: "Choose a license for your project.",
        choices: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3.0', 'GNU LGPLv3', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense', 'No License']
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors of this projects?"
    },
    {
        type: 'input',
        name: 'tests',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them."
    }, 
])
.then((data) => fs.writeFile('README-Sample.md', writeToFile(data), (err) => 
err ? console.error(err) : console.log("Success! Your README.md file has been generated.")))

const writeToFile = (data) => generateMarkdown(data);