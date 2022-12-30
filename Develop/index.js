// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown  = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
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
        type: 'list',
        name: 'license',
        message: "Choose a license for your project.",
        choices: ['MIT License', 'GNU GPLv3.0', 'GNU AGPLv3', , 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense', 'No License']
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
.then((data) => fs.writeFile('README-Guide.md', writeToFile(data), (err) => 
err ? console.error(err) : console.log("Success! Your README.md file has been generated.")))

const writeToFile = (data) => generateMarkdown(data);


// What is the use of the init() usage in JavaScript?
// https://stackoverflow.com/questions/7884081/what-is-the-use-of-the-init-usage-in-javascript
// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
