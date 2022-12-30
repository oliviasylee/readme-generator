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
  ${data.license}

  ## Tests
  ${data.tests}

  ## Contributing
  ${data.contributors}

  ## Questions
  If you have any questions about this projects, please contact me at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;