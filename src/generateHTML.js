function generateMgr(manager) {
    return `
    <div class="col-5">
      <div class="card">
          <div class="card-body">
              <h5 class="card-title">${manager.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
              <p class="card-text">ID: ${manager.id}</p>
              <p class="card-text"><a href="mailto:${manager.email}">${manager.email}</a></p>
              <p" class="card-link">Office: ${manager.office}</p>
          </div>
      </div>
    </div>
    `
  };
  
  function generateEng(engineer) {
    return `
    <div class="col-5">
      <div class="card">
          <div class="card-body">
              <h5 class="card-title">${engineer.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
              <p class="card-text">ID: ${engineer.id}</p>
              <p class="card-text"><a href="mailto:${engineer.email}">${engineer.email}</a></p>
              <a href="https://github.com/${engineer.github}" class="card-link">${engineer.name}'s Github</a></a>
          </div>
      </div>
    </div>
    `
  };
  
  function generateInt(intern){
    return `
    <div class="col-5">
      <div class="card">
          <div class="card-body">
              <h5 class="card-title">${intern.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
              <p class="card-text">ID: ${intern.id}</p>
              <p class="card-text"><a href="mailto:${intern.email}">${intern.email}</a></p>
              <p class="card-text">School: ${intern.school}</p>
          </div>
      </div>
    </div>
    `
  };
  
  generateHTML = (data) => {
    cardArray = []; 
  
    for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole(); 
  
      if (role === 'Manager') {
        const managerCard = generateMgr(employee);
        cardArray.push(managerCard);
      }
    
      if (role === 'Engineer') {
        const engineerCard = generateEng(employee);
        cardArray.push(engineerCard);
      }
  
      if (role === 'Intern') {
        const internCard = generateInt(employee);
        cardArray.push(internCard);
      }
    }
      let employeeCards = cardArray.join('')
  
      generatePage(employeeCards); 
      console.log("just ran generatePage with employeeCards")
  };
  
  function generatePage(employeeCards){
    return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
          <title>Team Profile</title>
      </head>
      <body>
          <div class="jumbotron bg-primary">
              <h1 class="text-center text-white display-4">My Team</h1>
          </div>
          <!--container that holds employee cards -->
          <div class="container">
              <div class="row justify-content-center">
                  ${employeeCards}
              </div>
          </div>
      </body>
    </html>
    `;
  };
  
  module.exports = generateHTML;