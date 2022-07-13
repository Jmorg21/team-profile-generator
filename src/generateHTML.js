const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


 const generateManager = function (manager) {
    return `
    <div class="col-3">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">${manager.name}</h3>
            </div>
            <div class="card-text">
                <p class="card-text"> ID: ${manager.id}</p>
                <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class= "card-text">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>    
    `
}

 const generateEngineer = function (engineer) {
    return `
    <div class="col-3">
        <div class="card">
            <div class="card-body">
                <h3 class=card-title>Engineer: ${engineer.name}</h3>
            </div>
            <div class="card-body">
                <p class="card-text"> ID: ${engineer.id}: Engineer</p>
                <p class="card-text">Email: <a href="mailto:${engineer.emaill}">${engineer.email}</a></p>
                <a href="https://github.com/${engineer.github}" class="card-link">${engineer.name}'s Github</a>
            </div>
        </div>
    </div>    
`
 }

 const generateIntern = function (intern) {
    return `
    <div class="col-3">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Intern: ${intern.name}</h3>
            </div>
            <div class="card-body">
                <p class="card-text"> ID: ${intern.id}</p>
                <p class="card-text">Email: <a href="mailto:${intern.emaill}">${intern.email}</a></p>
                <p class="card-text">School: ${intern.school}</p>
            </div>
        </div>
    </div>    
    `
 };

 generatePage = (teamRoster) => {

    var teamRoster2 = [];
    for (let i =0; i < teamRoster.Manager.length; i++) {
        const employee = teamRoster.Manager[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            teamRoster2.push(managerCard)
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            teamRoster2.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            teamRoster2.push(internCard);
        }
        const teamCards = teamRoster2.join('')

        const generateTeam = generateTeamHtml(teamCards);
        return generateTeam;
    }


 }
const generateTeamHtml = function (teamCards) {

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
        
    <body>
        <header>
            <div class="jumbotron bg-primary">
            <h1 class="text-white text-center display-4">Team Profile</h1>         
        </header> 
        <main>
        <div class="container">
            <div class="row justify-center">
                ${teamCards}
            </div>
        </div>
    </main>
    
    </body>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}

module.exports = generatePage;