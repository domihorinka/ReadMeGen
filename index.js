// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const render = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {type: "input",
message: "What is the title of the project?",
name: "title"},
{type: "input",
message: "What is the description of the project?",
name: "description"},
{type: "input",
message: "How do you install this program?",
name: "installation"},
{type: "list",
message: "What license do you want to use?",
name: "license", 
choices: ["BSD_3", "GPL_3.0","none"]},
{type: "input",
message: "How do you use your application?",
name: "usage"},
{type: "input",
message: "Who contributed to building your application?",
name: "contributors"},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err)throw err
        console.log("file was written")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers){
        console.log(answers);
        writeToFile("README.md", render(answers));
    })
}

// Function call to initialize app
init();

