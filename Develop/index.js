const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");


//PROCESS
//program should...
//prompt questions
//write questions to readme.md
//magick a fucking badge
//...
//   ...
//      ...
//do I need to do badge things before writing anyhting else?
//this should not be as async as it can... write? we want it to go in order and not haphazardly..

//what is this bullshit?
const questions = [

];



function init() {

    console.log("Welcome to the Readme Generator App. Please answer the following questions.");

inquirer.prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your Github Email?",
        name: "email"
    },
    //title
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },
    //user story- description part one
    {
        type: "input",
        message: "Input a user story. Example; As a developer, I want an app to walk me through creating a readme.",
        name: "userStory"
    },
    //description2
    {
        type: "input",
        message: "Write a short description of your project.",
        name: "description"
    },
    //no options for table of contents?
    //table of contents
    {
        type: "confirm",
        message: "Include table of contents?",
        name: "tableOfContent",
        default: true
    },
    //dependencies
    //if the user inputs a list I could wirte some text in front of it? "users will need to install..."
    {
        type: "input",
        message: "Before installing the program users will need to install:",
        name: "Dependencies"
    },
    //setup             @@@
    //this should be setup step 1; need to make this loop...
    {
        type: "input",
        message: "What steps must be taken to install your program?",
        name: "installation"
        //SHOULD I SPLIT THIS INTO SEVERAL PARTS?
        //LOOP UNTIL DONE GIVING EXAMPLES?
        //add more to this spot...
    },
    //usage
    {
        type: "input",
        message: "What steps should a user follow to use your program?",
        name: "usage"
    },
    //test
    {
        type: "input",
        message: "What steps should a user follow to test your program?",
        name: "test"
        //BREAK THIS INTO STEPS TOO!
        //should explain what is tested, and why...
    },
    //license
    {
        type: "input",
        message: "What license do you operate under?",
        name: "license"
    },
    //authors
    {
        type: "input",
        message: "Who are the primary authors of the project",
        name: "authors"
    },
    //contributors
    {
        type: "input",
        message: "list the major contributors, preferably by github username:",
        name: "contributors"
    },
    //contributors-help
    {
        type: "input",
        message: "How could those who want to help contribute?",
        name: "wantToHelp"
    },
    //questions... should report issues be different?
    {
        type: "input",
        message: "Contact info, or what to do if someone has questions or found a bug?",
        name: "questions"
    },
  
])
    .then(function (response) {
        console.log(response);
        // function writeToFile(fileName, data) {
        // }
        fs.writeFile("NewReadme.txt", "test", function(err){
            if(err){
                return console.log(err);
            }
        });
        //use the first 2 responses to get badge somehow...
        //write to file...



    });

}



// MAIN CODE ************************************************************************************** 
init();
