DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employedd_tracker;
USE employee_tracker;

CREATE TABLE department (
  id INT(30) AUTO_INCREMENT NOT NULL,
  departmentName VARCHAR (30),
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT(30) AUTO_INCREMENT NOT NULL,
  title VARCHAR (30),
  salary INT (30),
  department_id INT (30),
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INTEGER(30) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR (30) NOT NULL,
  lastName VARCHAR (30) NOT NULL,
  role_id INT (30),
  manager_id INT (30),
  PRIMARY KEY (id)
);