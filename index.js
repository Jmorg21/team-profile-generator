const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is your team manager's name?"  
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is your manager's ID?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is your manager's email address?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your manager's office number?"    
        },
        {
            type: 'list',
            name: 'role',
            message: "Please pick employee position:",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'employeeName',
            message: "What is your employee's name?"
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "What is your employee's ID?"
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "What is your employee's email address?"
        },
        {
            type: 'input',
            name: 'github', 
            message: "What is your employee's gitHub username?",
            when: (input) => input.role === 'Engineer',
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter intern's school:",
            when: (input) => input.role === 'Intern'
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add additional teammates?',
            default: false
        }
    ])
    .then(teamInfo => {
        let { name, id, email, role, github, school, confirmAdd } = teamInfo;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer (employeeName, employeeID, employeeEmail, github);
            console.log(employee);                                
        } else if (role === 'Intern') {
            employee = new Intern (employeeName, employeeID, employeeEmail, school);
            console.log(employee);           
        }

    })
};
