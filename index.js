
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

// Creating loopback function
function backToBeginning () {

}

class Employee {
  create(first_name, last_name, role, manager_id = "NULL") {
    // We will use the mysql plugin to insert into our database
    let sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES ('${first_name}', '${last_name}', (SELECT id FROM role WHERE title = '${role}'), ${manager_id});`;

    connection.connect();

    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
    });

    connection.end();
  }
  read() {
    // We will use the mysql plugin to insert into our database
    let sql = `SELECT * FROM employee`;

    connection.connect();

    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      //   console.log('The solution is: ', results[0].solution);
     return console.table(results)
    });
    
    connection.end();
  }
  update(id, first_name, last_name, role_id, manager_id = "NULL") {
    // We will use the mysql plugin to insert into our database
    let sql = `UPDATE employee SET first_name = '${first_name}', last_name = '${last_name}', role_id = ${role_id}, manager_id = ${manager_id} WHERE id = ${id}`;

    connection.connect();

    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
    });

    connection.end();
  }
  delete(id) {
    // We will use the mysql plugin to insert into our database
    let sql = `DELETE FROM employee WHERE employee.id = ${id}`;

    connection.connect();

    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      //   console.log('The solution is: ', results[0].solution);
    });

    connection.end();
  }
}
class Role {
  create(title, salary, department_id) {
    // We will use the mysql plugin to insert into our database
    let sql = `INSERT INTO role (title, salary, department_id)
        VALUES (?, ?, ?);`;

    connection.connect();

    connection.query(sql, [title, salary, department_id], function (error, results, fields) {
      if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
    });

    connection.end();
  }
  read() {
    // We will use the mysql plugin to insert into our database
    let sql = `SELECT * FROM role`;
    connection.connect();

    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
      console.table(results)
    });

    connection.end();
    // TO DO: Loop Back To Beginning of Questions
  }
  update(title, salary, department_id, id) {
    // We will use the mysql plugin to insert into our database
    let sql = `UPDATE role SET title = ?, salary = ?, department_id = ? WHERE id = ?`;

    connection.connect();

    connection.query(sql, [title, salary, department_id, id], function (error, results, fields) {
      if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
    });

    connection.end();
    // TO DO: Display Text Reading "Role Updated."
    // TO DO: Loop Back To Beginning of Questions
  }
  delete(id) {
    // We will use the mysql plugin to insert into our database
    let sql = `DELETE FROM role WHERE id = ?`;


    connection.connect();

    connection.query(sql, [id], function (error, results, fields) {
      if (error) throw error;
      //   console.log('The solution is: ', results[0].solution);
    });

    connection.end();
    // TO DO: Display Text Reading "Role Deleted."
    // TO DO: Loop Back To Beginning of Questions
  }
}
class Department {
  create(name) {
    // We will use the mysql plugin to insert into our database
    let sql = `INSERT INTO department (name)
        VALUES (?);`;

    connection.connect();

    connection.query(sql, [name], function (error, results, fields) {
      if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
    });

    connection.end();
        // TO DO: Loop Back To Beginning of Questions
  }
  read() {
    // We will use the mysql plugin to insert into our database
    let sql = `SELECT * FROM department`;
    connection.connect();

    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
      console.table(results)
    });

    connection.end();
    // TO DO: Loop Back To Beginning of Questions
  }
  update(departmentName, id) {
    // We will use the mysql plugin to insert into our database
    let sql = `UPDATE department SET name = ? WHERE id = ?`;

    connection.connect();

    connection.query(sql, [departmentName, id], function (error, results, fields) {
      if (error) throw error;
        // console.log('The solution is: ', results[0].solution);
    });

    connection.end();
    // TO DO: Display Text Reading "Department Updated."
    // TO DO: Loop Back To Beginning of Questions
  }
  delete(id) {
    // We will use the mysql plugin to insert into our database
    let sql = `DELETE FROM department WHERE id = ?`;


    connection.connect();

    connection.query(sql, [id], function (error, results, fields) {
      if (error) throw error;
      //   console.log('The solution is: ', results[0].solution); 
    });

    connection.end();
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
        "View all Employees by Department",
        "View all Employees by Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "View All Roles",
      ]
    },
  ])
}
async function run() {
  const prompt = await firstPrompt()
  switch (prompt.action) {
    case "View all Employees":
      new Employee().read();
      break;
     case "View all Employees by Department":
        new Employee().read();
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