const inquirer = require('inquirer');

const { writeFile } = require('fs').promises;

const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Provide a description of your project.',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'How does one install the application to their device?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Describe how one would use the application?',
    },
    {
      type: 'list',
      name: 'Licence',
      message: 'What licence did you use?',
      choices: ['Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'The Organization for Ethical Source', 'IBM', 'ISC','MIT', 'Mozilla', 'Open Data Commons','Perl', 'SIL', 'WTFPL', 'Zlib', 'Unlicense'],
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'Who worked on the project?',
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'How does one test the application?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'githubLink',
      message: 'What is the link to your GitHub?',
    },
  ]);
};

const writeToFile = ({ Title, Description, Installation, Usage, Licence, Contributing, Tests, email, github, githubLink }) =>
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
    <h1 class="display-4">${Title}</h1>
    <h3>Table of Contents</h3>
        <ul>        
        - <li>[Description](#description)</li>
        - <li>[Installation](#installation)</li>
        - <li>[Usage](#usage)</li>
        - <li>[Contributing](#Contributing)</li>
        - <li>[Questions](#Questions)</li>
        </ul>
    <h3>Description</h3>
        <p>${Description}</p>
    <h3>Installation</h3>
        <p>${Installation}</p>
    <h3>Usage</h3>
        <p>${Usage}</p>
    <h3>Licence</h3>
        <p>${Licence}</p>
    <h3>Contributing</h3>
        <p>${Contributing}</p>
    <h3>Tests</h3>
        <p>${Tests}</p>
    <h3>Questions</h3>
    <ul>
        <li>Email address: ${email}</li>
        <li>GitHub username: ${github}</li>
        <li>GitHub link: ${githubLink}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

const init = () => {
  questions()
    .then((answers) => writeFile('index.html', writeToFile(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
