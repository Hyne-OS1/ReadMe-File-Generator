const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");


// array of questions to be asked to generate the README.md file
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter a Project Title",
    },
    {
        type: "input",
        name: "description",
        message: "Please add a brief description of your project",
    },
    {
        type: "input",
        name: "usage",
        message: "List any coding languages used in the creation of this project",
    },
    {
        type: "input",
        name: "require",
        message: "List any dependencies your project may require",
    },
    {
        type: "input",
        name: "name",
        message: "Please enter your full name",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter a user email address",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub Username",
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list any project contributors GitHub Usernames",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please assign a license to this project",
        choices: ["MIT", "AFL-3.0", "ISC", "Unlicense", "none"],
    },
]

// fucntion to write the readme file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize the application
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Generating README.md File...");
        writeToFile("./Create/README.md", generateMarkdown({...responses }));
    });
}
init();