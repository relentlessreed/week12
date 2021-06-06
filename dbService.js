var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "week12_db",
});

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
      console.table(results)
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
class Department {
  create() {
    // We will use the mysql plugin to insert into our database
  }
  read() {
    // We will use the mysql plugin to insert into our database
  }
  update() {
    // We will use the mysql plugin to insert into our database
  }
  delete() {
    // We will use the mysql plugin to insert into our database
  }
}
class Role {
  create() {
    // We will use the mysql plugin to insert into our database
    let sql = ``;
  }
  read() {
    // We will use the mysql plugin to insert into our database
  }
  update() {
    // We will use the mysql plugin to insert into our database
  }
  delete() {
    // We will use the mysql plugin to insert into our database
  }
}

async function run() {
    let employee = new Employee()
// new Employee().create("Frank", "Hill", "HR Grunt");
new Employee().read();
// await employee.update(2, 'Hank', 'Jetson', '1');
// new Employee().delete(5);
// await employee.read();
}

run();