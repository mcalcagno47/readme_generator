const inquirer = require('inquirer');

// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require('fs').promises;

// Use writeFileSync method to use promises instead of a callback function

const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How does one install the application to their device?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Describe how one would use the application?',
    },
    // {
    //   type: 'list or whatever.........',
    //   name: 'licence',
    //   message: 'Enter your GitHub Username',
    // },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter your LinkedIn URL.',
    },
  ]);
};

const writeToFile = ({ name, location, github, linkedin }) =>
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
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

// Bonus using writeFileSync as a promise
const init = () => {
  questions()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile('index.html', writeToFile(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
