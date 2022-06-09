// TODO: Include packages needed for this application

const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer")
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
    "What is your project Title?",
    "Please provide a brief description of your application",
    "Please provide brief instructions on installing your application",
    "Please provide brief instructions on how to use your application",
    "Please list the github profiles of all your collaborators",
    "Please provide a brief description on how to test you application",
    "Which of these licenses would you like your application to be under?",
    "What is your Github Username?",
    "Where can someone contact you through email for further questions?",
];

// TODO: Create a function to write README file
const generateReadMe = ({title}) => 
    `Title is ${title}`



const promptUser = () => {
    return inquirer.prompt(
        [
            {
                type: "input",
                message: questions[0],
                name: "title"
            },
            {
              type: "input",
              message: questions[1],
              name: "description"  
            },
            {
                type: "input",
                message: questions[2],
                name: "installation"
            },
            {
                type: "input",
                message: questions[3],
                name: "usage"
            },
            {
                type: "input",
                message: questions[4],
                name: "collaborators"
            },
            {
                type: "input",
                message: questions[5],
                name: "test",
            },
            {
                type: "list",
                message: questions[6],
                name: "license",
                choices: ["BSD", "MIT", "GPL"],
            },
            {
                type: "input",
                message: questions[7],
                name: "github"
            },
            {
                type: "input",
                message: questions[8],
                name: "email"
            }
        ]
    )
}

// TODO: Create a function to initialize app
init = () => {
    promptUser()
        .then((answers) => fs.writeFileSync('README.md', generateReadMe(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();




// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions