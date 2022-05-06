const inquirer = require('inquirer');
const fs = require('fs');

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the team managers name?',
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'What is the employee id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'office',
      message: 'What is the office number?',
    },
    {
        type: "list",
        message: "Would you like to",
        name: "choice",
        choices: ["add engineer", "add intern", "finish building your team"],
    },
   
  ]);
};
//if add engineer => (




const generateHTML = ({ name, employeeId, email, office, position }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${employeeId}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${email}</li>
      <li class="list-group-item">LinkedIn: ${office}</li>
      <li class="list-group-item">The position: ${position}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

// Bonus using writeFileSync as a promise
const init = () => {
    //initialPrompt().then((
    //{choice})=> 

    //if (choice === "add engineer");
    //.then promptUser;

   // if (choice === "add intern");
   // .then promptUser;

    //if(choice === "finish building your team")
       // .then  
    // promptUser()
 //Use writeFileSync method to use promises instead of a callback function
 .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
 .then(() => console.log('Successfully wrote to index.html'))
 .catch((err) => console.error(err));
};

init();
