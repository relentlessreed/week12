
const inquirer = require('inquirer');
require('dotenv').config();
var mysql = require("mysql");
var consoleTable = require("console.table")
var connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
connection.connect()

class Employee {
  // create(first_name, last_name, role, manager_id = "NULL") {
  create() {
    console.log("Create Employee")
    inquirer.prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?"
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?"
      },
      {
        type: "input",
        name: "roleId",
        message: "What is the employee's role id #?"
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the employee's manager id #?"
      },

    ]).then(newEmployee => {
      const newEmpFirstName = newEmployee.firstName
      const newEmpLastName = newEmployee.lastName
      const newEmpRoleId = parseInt(newEmployee.roleId)
      const newEmpManagerId = parseInt(newEmployee.managerId)
      // We will use the mysql plugin to insert into our database
      let sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
      VALUES ('${newEmpFirstName}', '${newEmpLastName}', ${newEmpRoleId}, ${newEmpManagerId});`;
      // //connection.connect();
      
      connection.query(sql, function (error, results, fields) {
        if (error) throw error;
          // console.log('The solution is: ', results[0].solution);
          console.log(results)
          run()
      });

      
    })
    

   //connection.end();
    // calling in the run
  }
  read() {
    // We will use the mysql plugin to insert into our database
    let sql = `SELECT * FROM employee`;

    //connection.connect();

    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      //   console.log('The solution is: ', results[0].solution);
     console.table(results)
     run();
    });
    
  //  connection.end();
  }
  update(id, first_name, last_name, role_id, manager_id = "NULL") {
    // We will use the mysql plugin to insert into our database
    let sql = `UPDATE employee SET first_name = '${first_name}', last_name = '${last_name}', role_id = ${role_id}, manager_id = ${manager_id} WHERE id = ${id}`;

    ////connection.connect();

    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
    });

    ////connection.end();
  }
  delete(id) {
    // We will use the mysql plugin to insert into our database
    let sql = `DELETE FROM employee WHERE employee.id = ${id}`;

    ////connection.connect();

    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      //   console.log('The solution is: ', results[0].solution);
    });

    ////connection.end();
  }
}
class Role {
create() {
      console.log("Create Role")
      inquirer.prompt([
        {
          type: "input",
          name: "roleTitle",
          message: "What is the title of the Role?"
        },
        {
        type: "input",
          name: "roleSalary",
          message: "What is the Role Salary?"
        },
        {
        type: "input",
          name: "roleDepartmentId",
          message: "What is the Role Department Id?"
        },
      ]).then(newRole => {
    const newRoleTitle = newRole.roleTitle
    const newRoleSalary = newRole.roleSalary
    const newRoleDepartmentId = newRole.roleDepartmentId
// We will use the mysql plugin to insert into our database
let sql = `INSERT INTO role (title, salary, department_id)
VALUES ("${newRoleTitle}", "${newRoleSalary}", "${newRoleDepartmentId}");`;
  console.log(sql)
      connection.query(sql, function (error, results, fields) {
        if (error) throw error;
          // console.log('The solution is: ', results[0].solution);
          console.log(results)
          run()
      });
    })
    
    ////connection.connect();

    connection.query(sql, [title, salary, department_id], function (error, results, fields) {
      if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
    });

    ////connection.end();
  }
  read() {
    // We will use the mysql plugin to insert into our database
    let sql = `SELECT * FROM role`;
    ////connection.connect();

    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
      console.table(results)
      run()
    });

    ////connection.end();
    // TO DO: Loop Back To Beginning of Questions
  }
  update(title, salary, department_id, id) {
    // We will use the mysql plugin to insert into our database
    let sql = `UPDATE role SET title = ?, salary = ?, department_id = ? WHERE id = ?`;

    ////connection.connect();

    connection.query(sql, [title, salary, department_id, id], function (error, results, fields) {
      if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
    });

    ////connection.end();
    // TO DO: Display Text Reading "Role Updated."
    // TO DO: Loop Back To Beginning of Questions
  }
  delete(id) {
    // We will use the mysql plugin to insert into our database
    let sql = `DELETE FROM role WHERE id = ?`;


    ////connection.connect();

    connection.query(sql, [id], function (error, results, fields) {
      if (error) throw error;
      //   console.log('The solution is: ', results[0].solution);
    });

    ////connection.end();
    // TO DO: Display Text Reading "Role Deleted."
    // TO DO: Loop Back To Beginning of Questions
  }
}
class Department {
  create() {

    console.log("Create Department")
    inquirer.prompt([
      {
        type: "input",
        name: "departmentName",
        message: "What is the name of the Department?"
      },
    ]).then(newDepartment => {
    // We will use the mysql plugin to insert into our database
    let sql = `INSERT INTO department (name)
        VALUE ("${newDepartment.departmentName}");`;
console.log(sql)
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
        console.log(results)
        run()
    });
  })
    ////connection.end();
        // TO DO: Loop Back To Beginning of Questions
  }
  read() {
    // We will use the mysql plugin to insert into our database
    let sql = `SELECT * FROM department`;
    ////connection.connect();

    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
        // console.log('The solution is: ', results[0].solution);

      console.table(results)
      run();
    })

   //connection.end();
    // TO DO: Loop Back To Beginning of Questions
  }
  update(departmentName, id) {
    // We will use the mysql plugin to insert into our database
    let sql = `UPDATE department SET name = ? WHERE id = ?`;

    ////connection.connect();

    connection.query(sql, [departmentName, id], function (error, results, fields) {
      if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
    });

    ////connection.end();
    // TO DO: Display Text Reading "Department Updated."
    // TO DO: Loop Back To Beginning of Questions
  }
  delete(id) {
    // We will use the mysql plugin to insert into our database
    let sql = `DELETE FROM department WHERE id = ?`;


    ////connection.connect();

    connection.query(sql, [id], function (error, results, fields) {
      if (error) throw error;
      //   console.log('The solution is: ', results[0].solution); 
    });

    ////connection.end();
    // TO DO: Display Text Reading "Role Deleted."
    // TO DO: Loop Back To Beginning of Questions
  }
}
async function firstPrompt(){
  return   inquirer.prompt([
    /* Pass your questions in here */
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View all Employees",
        "View all Departments",
        "View all Employees by Department",
        "View all Employees by Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "Add Department",
        "Add Role",
        "View all Roles",
        "Quit"
      ]
    },
  ])
}
async function run() {
  const prompt = await firstPrompt()
  // connection.end()
  // //connection.connect()
  switch (prompt.action) {
    case "View all Employees":
      new Employee().read();
      break;
    case "View all Departments":
      new Department().read();
    break;
    case "View all Roles":
      new Role().read();
    break;
     case "View all Employees by Department":
        new Employee().read();
        break;
     case "Add Employee":
       new Employee().create()
    case "Add Department":
       new Department().create()
    case "Add Role":
       new Role().create()
    case "Update Employee Role":
        new Role().create()
     case "Quit":
       
       
      // //connection.end();
       break;
  }
//     let employee = new Employee()
// new Employee().create("Jason", "Bourne", "HR Manager", "3");
// new Employee().read();
// await employee.update(2, 'Fernando', 'Ortiz', '1');
// new Employee().delete(4);
// await employee.read();
    // ?
    // // role.create("Janitor", 25000.00, 3);
    // // role.read();
    // // role.update("Mop Technician", 20000.00, 4, 3);
    // role.read();
    // // role.delete(3);
    // ?
}

console.log(`

                                                                    
 _____           _                    _____             _           
|   __|_____ ___| |___ _ _ ___ ___   |_   _|___ ___ ___| |_ ___ ___ 
|   __|     | . | | . | | | -_| -_|    | | |  _| .'|  _| '_| -_|  _|
|_____|_|_|_|  _|_|___|_  |___|___|    |_| |_| |__,|___|_,_|___|_|  
            |_|       |___|                                         

                      Vers. 1.0.0 (©2021)

                                    
`)

run();