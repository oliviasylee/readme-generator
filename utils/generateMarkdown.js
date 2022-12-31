
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license)
    return ``;
  else{ 
    return `[![badge](https://img.shields.io/badge/license-${license}-brightgreen)](${renderLicenseLink(license)})
    \n This application is covered by the ${license}. To learn more about this, click the license button.`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license === 'MIT') {
      return `https://choosealicense.com/licenses/mit/`
    }
    if(license === 'Apache'){
      return `https://choosealicense.com/licenses/apache-2.0/`
    }
    if(license === 'BSD'){
      return `https://opensource.org/licenses/BSD-3-Clause`
    }
   if(license === 'GNU'){
      return `https://choosealicense.com/licenses/gpl-3.0/`
    }
}

// Function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data.license)}

  ## Tests
  ${data.tests}

  ## Contributing
  ${data.contributors}

  ## Questions
  If you have any questions about this projects, please contact me at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;