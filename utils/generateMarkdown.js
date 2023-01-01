// Function that returns a license badge based on which license is passed in.
function renderLicenseBadge(license) {
  if(!license)
    return ``;
  else{ 
    return `[![badge](https://img.shields.io/badge/license-${license}-brightgreen)](${renderLicenseLink(license)})
    \n This application is covered by the ${license}. To learn more about this, click the license button.`
  }
}

// Function that returns the license link
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
    if(license === 'Mozilla_Public_License'){
      return `https://choosealicense.com/licenses/mpl-2.0/`
    }
}

// Function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
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