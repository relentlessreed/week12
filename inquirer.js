const mysql = require('mysql');
const inquirer = require('inquirer');
require('console.table');

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "list",
      name: "title",
      message: "What would you like to do?",
      choices: [
        "View all Employees",
        "View all Employees by Department",
        "View all Employees by Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "View All Roles",
      ]
    },
    {

    }
    
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
  
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  