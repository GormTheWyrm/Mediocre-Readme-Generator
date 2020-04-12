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
    // {
    //     type: "confirm",
    //     message: "Include table of contents?",
    //     name: "tableOfContent",
    //     default: true
    // },
    //dependencies
    //if the user inputs a list I could wirte some text in front of it? "users will need to install..."
    {
        type: "input",
        message: "What programs is your project dependent on?",
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
        console.log(response.username);
        // function writeToFile(fileName, data) {
        // }
        fs.writeFile("NewReadme.txt", 
        //do the writing here
        `
        ${response.title}/n
        ${response.description}/n
        User Story
        ${response.userStory}/n
        Table of Contents TBA...
          Title
          User Story
          Table of Contents
          Dependencies
          Setup Instructions and Installation Guide
          Instructions for Use
          Testing
          Licensing
          Contributors
          /n
        Dependencies 
        ${response.Dependencies}/n
        Installation Guide:
        ${response.installation}/n
        Instructions for Use
        ${response.usage}/n
        Testing
        ${response.test}/n
        License
        ${response.license}/n
        Contributors
            Main Authors: ${response.authors}
            Other Contributions: ${response.contributors}

        How to Help
        ${response.wantToHelp}/n
        Questions and Contact
        ${response.questions}/n
        `
        // title should be bold or something...
        //look up markup/markdown text .md ...
        //ToC should have links
        
        
        
        
        
        
        , function(err){
            if(err){
                return console.log(err);
            }
            console.log("New Readme Generated");
        });
        //use the first 2 responses to get badge somehow...
       



    });

}



// MAIN CODE ************************************************************************************** 
init();
