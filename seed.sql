INSERT INTO department ([name])
VALUES ('HR');

INSERT INTO department ([name])
VALUES ('Management');

INSERT INTO department ([name])
VALUES ('Security');

INSERT INTO department ([name])
VALUES ('Development Team');

INSERT INTO department ([name])
VALUES ('Sales');

INSERT INTO [role] (title, salary, department_id)
VALUES ('HR Manager', 660000.00, (SELECT id FROM department WHERE [name] = 'HR'));

INSERT INTO [role] (title, salary, department_id)
VALUES ('HR Grunt', 660.00, (SELECT id FROM department WHERE [name] = 'HR'));

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Brown', (SELECT id FROM [role] WHERE title = 'HR Manager'), NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Peter', 'Parker', (SELECT id FROM [role] WHERE title = 'HR Grunt'), (SELECT id FROM employee WHERE first_name = 'John' AND last_name = 'Brown'));

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('George', 'Jetson', (SELECT id FROM [role] WHERE title = 'HR Grunt'), (SELECT id FROM employee WHERE first_name = 'John' AND last_name = 'Brown'));

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Clark', 'Kent', (SELECT id FROM [role] WHERE title = 'HR Grunt'), (SELECT id FROM employee WHERE first_name = 'John' AND last_name = 'Brown'));