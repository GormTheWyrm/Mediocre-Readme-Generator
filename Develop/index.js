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

    {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },

    {
        type: "input",
        message: "Input a user story. Example; As a developer, I want an app to walk me through creating a readme.",
        name: "userStory"
    },
   
    {
        type: "input",
        message: "Write a short description of your project.",
        name: "description"
    },
 {
        type: "input",
        message: "What programs is your project dependent on?",
        name: "Dependencies"
    },
   
    {
        type: "input",
        message: "What steps must be taken to install your program?",
        name: "installation"

    },
    {
        type: "input",
        message: "What steps should a user follow to use your program?",
        name: "usage"
    },
    {
        type: "input",
        message: "What steps should a user follow to test your program?",
        name: "test"
        //BREAK THIS INTO STEPS TOO!
        //should explain what is tested, and why...
    },
    {
        type: "input",
        message: "What license do you operate under?",
        name: "license"
    },
    {
        type: "input",
        message: "Who are the primary authors of the project",
        name: "authors"
    },
    {
        type: "input",
        message: "list the major contributors, preferably by github username:",
        name: "contributors"
    },
    {
        type: "input",
        message: "How could those who want to help contribute?",
        name: "wantToHelp"
    },
    {
        type: "input",
        message: "Contact info, or what to do if someone has questions or found a bug?",
        name: "questions"
    },
  
])
    .then(function (response) {
        console.log(response.username);
        //do the writing here        
         fs.writeFile("NewReadme.txt", 
        `
        ${response.title}\n
        ${response.description}\n
        User Story
        ${response.userStory}\n
        Table of Contents:
          Title
          User Story
          Table of Contents
          Dependencies
          Setup Instructions and Installation Guide
          Instructions for Use
          Testing
          Licensing
          Contributors
          \n
        Dependencies 
        ${response.Dependencies}\n
        Installation Guide:
        ${response.installation}\n
        Instructions for Use:
        ${response.usage}\n
        Testing:
        ${response.test}\n
        License:
        ${response.license}\n
        Contributors:
            Main Authors: ${response.authors}
            Other Contributions: ${response.contributors}

        How to Help:
        ${response.wantToHelp}\n
        Questions and Contact:
        ${response.questions}\n
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
