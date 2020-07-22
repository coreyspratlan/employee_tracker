const inquirer = require("inquirer");
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "C1@12302a",
    database: "employeeTracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    doWhat();
});

function doWhat() {
    inquirer
        .prompt({
            name: "what",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Add a department?",
                "Add a role?",
                "Add an employee?",
                "View a department?",
                "View a role?",
                "View an employee?",
                "Update a department?",
                "Update a role?",
                "Update an employee?"
            ]
        })
        .then(function (answer) {
            switch (answer.what) {
                case "View a department?":
                    viewDepartment();
                    break;
            
                case "View a role?":
                    viewRole();
                    break;
            
                case "View an employee?":
                    viewEmployee();
                    break;

                case "Update a department?":
                    updateDepartment();
                    break;
            
                case "Update a role?":
                    updateRole();
                    break;
            
                // case "Update an employee:":
                //     updateEmployee();
                //     break;
            }
        })

    function viewDepartment() {
        inquirer
            .prompt({
                name: "departmentS",
                type: "list",
                message: "Choose a department to view?",
                choices: [
                    "Engineering",
                    "Finance",
                    "Legal",
                    "Sales"
                ]
            })
            .then(function(answer) {
                console.log(answer);
                 
                // let query = "SELECT * FROM department WHERE ?", {department_name: answer.departmentS};
                connection.query("SELECT * FROM department WHERE ?", {department_name: answer.departmentS}, function(err, res) {
                    if (err) throw err;
                    console.table(res);
                })
            })
        }
    }

    function viewRole() {
        inquirer
            .prompt({
                name: "roleS",
                type: "list",
                message: "Choose a role to view?",
                choices: [
                    "Senior Engineer",
                    "Junior Engineer",
                    "Accountant",
                    "Accounting Manager",
                    "Lawyer",
                    "Legal Assistant",
                    "Sales Manager",
                    "Salesperson"
                ]
            })
            .then(function(answer) {
                console.log(answer);
                 
                // let query = "SELECT * FROM department WHERE ?", {department_name: answer.departmentS};
                connection.query("SELECT * FROM employeeRole WHERE ?", {title: answer.roleS}, function(err, res) {
                    if (err) throw err;
                    console.table(res);
                })
            })
        }
    

    function viewEmployee() {
        inquirer
            .prompt({
                name: "employeeS",
                type: "list",
                message: "Choose an employee to view?",
                choices: [
                    "Lance",
                    "Kevin",
                    "Jeff",
                    "Nancy",
                    "Cliff",
                    "Brandon",
                    "Alex",
                    "Dunhill"
                ]
            })
            .then(function(answer) {
                console.log(answer);
                 
                // let query = "SELECT * FROM department WHERE ?", {department_name: answer.departmentS};
                connection.query("SELECT * FROM employee WHERE ?", {firstName: answer.employeeS}, function(err, res) {
                    if (err) throw err;
                    console.table(res);
                })
            })
        }

        function updateDepartment() {
            inquirer
                .prompt({
                    name: "updateDepartmentS",
                    type: "list",
                    message: "Choose the department to update?",
                    choices: [
                        "Engineering",
                        "Finance",
                        "Legal",
                        "Sales"
                    ]
                })
                .then(function(answer) {
                    console.log(answer);
                     
                    // let query = "SELECT * FROM department WHERE ?", {department_name: answer.departmentS};
                    connection.query("UPDATE department SET department_name = '' WHERE ?", {department_name: answer.updateDepartmentS} , function(err, res) {
                        if (err) throw err;
                        console.table(res);
                    })
                })
            }
        
            function updateRole() {
                inquirer
                    .prompt({
                        name: "updateEmployeeRoleS",
                        type: "list",
                        message: "Choose the role to update?",
                        choices: [
                            "Senior Engineer",
                            "Junior Engineer",
                            "Accountant",
                            "Accounting Manager",
                            "Lawyer",
                            "Legal Assistant",
                            "Sales Manager",
                            "Salesperson"
                        ]
                    })
                    .then(function(answer) {
                        console.log(answer);
                         
                        // let query = "SELECT * FROM department WHERE ?", {department_name: answer.departmentS};
                        connection.query("UPDATE employeeRole SET title = '' WHERE ?", {title: answer.updateEmployeeRoleS} , function(err, res) {
                            if (err) throw err;
                            console.table(res);
                        })
                    })
                }
    
        // Add departments, roles, employees

        // Update employee roles





        // function whatDeparment() {
        //     inquirer
        //         .prompt({
        //             name: "department",
        //             type: "input",
        //             message: "What is your deparment name?"
        //         })
        //         .then(function (answer) {
        //             var query = "SELECT position, department_name FROM employeeTracker_db";
        //             connection.query(query, { department: answer.department_name }, function (err, res) {
        //                 for (var i = 0; i < res.length; i++) {
        //                     console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
        //                 }
        //                 doWhat();
        //             });
        //         });
        //     }
    
