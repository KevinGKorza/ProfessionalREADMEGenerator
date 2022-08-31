// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    //Project Title 
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
        validate: (userTitleProject) => {
            if (userTitleProject) {
                return true;
            } else {
                console.log("You need to tell us the title of your project!");
                return false;
            }
        },
    },

    //Description of project
    {
        type: "input",
        name: "description",
        message: "What is your description of your project?",
        validate: (userDescriptionProject) => {
            if (userDescriptionProject) {
                return true;
            } else {
                console.log("You need to tell us the description of your project!");
                return false;
            }
        },
    },

    //Installation of project
    {
        type: "input",
        name: "installation",
        message: "How did you install your project?",
        validate: (userInstallationProject) => {
            if (userInstallationProject) {
                return true;
            } else {
                console.log("Let us know how you installed your project!");
                return false;
            }
        },
    },

    //Usage information of project
    {
        type: "input",
        name: "usage",
        message: "How do you want your project used?",
        validate: (userUsageProject) => {
            if (userUsageProject) {
                return true;
            } else {
                console.log("Let us know how you want your project used!");
                return false;
            }
        },
    },

    //Contribution section of project
    {
        type: "input",
        name: "contribution",
        message: "What did you do to contribute to the project?",
        validate: (userContributionProject) => {
            if (userContributionProject) {
                return true;
            } else {
                console.log("Let us know how you contributed, it's important!");
                return false;
            }
        },
    },

    //Testing section of project
    {
        type: "input",
        name: "testing",
        message: "How did you test your project?",
        validate: (userTestingProject) => {
            if (userTestingProject) {
                return true;
            } else {
                console.log("You need to let us know how you tested your project!");
                return false;
            }
        },
    },

    //Licensing section of project 
    {
        type: "list",
        name: "licensing",
        message: "What license did you use for your project?",
        choices: [
            "Apache", 
            "Boost", 
            "Mozilla", 
            "MIT", 
            "GNU LGPLv3", 
            "GNU GPLv3", 
            "GNU AGPLv3", 
        ],
        validate: (userLicensingProject) => {
            if (userLicensingProject) {
                return true;
            } else {
                console.log("You have to choose an option!");
                return false;
            }
        },
    },

    //Github
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
        validate: (userGithubAccount) => {
            if (userGithubAccount) {
                return true;
            } else {
                console.log("Let us know what your Github user name is!");
                return false;
            }
        },
    },

    //Email 
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: (userEmailAddress) => {
            if (userEmailAddress) {
                return true;
            } else {
                console.log("Let us know what your email address is!");
                return false;
            }
        },
    },

    

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("Congratulations! Your file has been created!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (userInputs) {
        console.log(userInputs);
        writeToFile("README.md", generateMarkdown(userInputs));
    });
}

// Function call to initialize app
init();

