const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username.",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter a username.");
                    return false;
                }
            }
        },
        {
           type: "input",
           name: "email",
           message: "Enter your Email.",
           validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter a Email.");
                    return false;
                }
            }  
        },
        {
            type: "input",
            name: "title",
            message: "What is your project title?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter a title.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Please write a breif description of the project.",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter a description.");
                    return false;
                }
            }
        },
        {
           type: "input",
           name: "installation",
           message: "What are the steps to install the project?",
           validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log("Please provide steps to install the project.");
                    return false;
                }
            } 
        },
        {
          type: "input",
          name: "usage",
          message: "Please provide usage instructions and/or screenshots.",
          validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log("Please provide a usage description.");
                    return false;
                }
            }  
        },
        {
            type: "input",
            name: "credits",
            message: "Please credit your collaborators.",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log("Please provide credits");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license for the project.",
            choices: ["MIT", "GNU General Public License 3", "GNU General Public License 2", "Apache License 2.0"],
            default: ["MIT"]
        },
        {
            type: "input",
            name: "features",
            message: "Provide a list of the applications features.",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log("Please provide a list of the applications features.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contributing",
            message: "Let people know how they can contribute to the project.",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log("Please provide a list of project contributers.");
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "test",
            message: "How do you run tests on the application?",
            default: "npm test",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log("Please let people know how to test the application.");
                    return false; 
                }
            }
        }
    ])
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(data => {
        return writeToFile(data);
    })
    .catch(err => {
        console.log(err)
    })
};

const writeToFile = data => {
    fs.writeFile("README.md", data, err =>{
        if(err) {
            console.log(err);
            return;
        }
        else {
            console.log("README created!")
        }
    })
};

questions()