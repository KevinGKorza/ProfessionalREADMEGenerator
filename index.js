//Packages needed for this application to run
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

//An array of questions that will be asked and hopefully answered by the user 
//If the user decides on not answering the presented question then they won't be able to continue
//A message will appear letting them know that they need to answer the question
//The user needs to "npm install --save inquirer" first 
const questions = [

    //The Project Title question
    //The user is asked what the name of their project is for the README generation
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

    //The Description of project
    //The user is asked if they could describe their project
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

    //The Installation of the project
    //The user is asked how they installed their project
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

    //The Usage information of the project
    //The user is asked how they want their project used
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

    //The Contribution section of the project
    //The user is asked what they did to contribute to the project
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

    //The Testing section of the project
    //The user is asked how they tested their project
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

    //The Licensing section of the project 
    //The user is asked what license they used for the project
    //An appropriate badge will appear once the selction has been made
    //No badge will appear if "None" has been chosen
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
            "None", 
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

    //The Github section of the project
    //This is where the user is asked what their Github user name is for the README file generation
    //Once provided, their GitHub account will be linked 
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

    //The Email section of the project
    //This is where the user is asked what their email is for the README file generation
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


//This is the function to write/generate the README file
//If succesful, then the user will get a message in the console saying that their file has been created
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("Congratulations! Your file has been created!");
    });
}


//This is the function to initialize the application
//Ties everything together
function init() {
    inquirer.prompt(questions).then(function (userInputs) {
        console.log(userInputs);
        writeToFile("README.md", generateMarkdown(userInputs));
    });
}

// Function call to initialize app
init();
