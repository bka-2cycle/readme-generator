const inquirer = require('inquirer');
const fs = require('fs');
const { url } = require('inspector');

// use inquirer to create prompts/questions to fill in each category of the ReadMe file
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the app?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What, why and how of the project?',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Instructions for installing the app',
            default: 'N/A',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How to use the app',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'list collaborators with links to GH profiles',
            default: 'N/A',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How to contribute',
            default: 'N/A',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Run tests, with examples',
            default: 'N/A',
        },
        {
            type: 'input',
            name: 'questionsone',
            message: 'Enter GH User Name',
        },
        {
            type: 'input',
            name: 'questionstwo',
            message: 'Enter E-mail',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose license type:',
            choices: ['MIT', 'Apache', 'GNU'],
        },
    ])


    .then((data) => {
        console.log(data.license)
        const filename = 'README.md'

        // append ReadMe to a newly generated md file, the appended string will pull contents from command line input. Log success if no errors are encountered.
        const md = `# ${data.title}
  

  ![license badge](https://img.shields.io/static/v1?label=License&message=${data.license}&color=brightgreen)

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

  
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}

  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  GitHub User Name: ${data.questionsone}, GitHub Profile: https://github.com/bka-2cycle

  Contact me with questions at: ${data.questionstwo}
  
  ## License
  
  ${data.license}`

        fs.writeFile(filename, md, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
