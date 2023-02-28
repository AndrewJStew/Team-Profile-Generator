# Team Profile Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub](https://img.shields.io/github/followers/AndrewJStew?label=follow&style=social)
![Last Commit](https://img.shields.io/github/last-commit/AndrewJStew/Team-Profile-Generator)

## Description:  
This application will take in information about employees on a software engineering team, then generate an HTML webpage that displays summaries for each person.

    
## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license-info)

## Installation
*Fork, Clone, or Download and then install dependencies:
```
npm install
```
*Open the terminal to run tests: 
```
npm run test
```

## Usage

![Generated_HTML]()

* Start the project in your terminal by entering `npm start` and follow the prompts development team member data.
* Once there are no more team members to enter, the application will generate a HTML page with the team data. 
* If you run the application again, the previous data will overwrite the `team.html` file. 

## Tests
There are pre-coded tests utilizing npm jest built into the application. Simply type `npm run test` into the terminal to see those tests.
Other tests include: 
* WHEN the user starts the program, 
* THEN manager information is requested including an office phone. 
* WHEN the user selects to enter engineer data, 
* THEN user is prompted to enter information excluding a phone number but including a GitHub username. 
* WHEN the user selects to enter intern data, THEN the user is prompted to enter information excluding a phone number or GitHub account, but including a school name.
* WHEN the user selects no more employees to enter,
* THEN the application renders a stylized HTML file presenting cards with team member data.  

## Questions
You can contact the author, Andy Stewart, via [andrewjstewart.work@gmail.com](mailto:andrewjstewart.work@gmail.com)


## License
This project is licensed under the terms of the MIT license. 
More information is available at [opensource.org/licenses](https://opensource.org/licenses/MIT)


## Thanks
Some of this code was attributed the psuodo coding Dan Mueller created during class. I am using his psuedo code.
