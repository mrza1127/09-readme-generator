// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require('fs');
const renderLicenseBadge = license => {
  if (!license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    `
  } else if (license === 'ISC') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
    `
  } else if (license === 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    `
  } else if (license === 'GPL 3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    `
  } else {
    return ''
  }
}

// returning a link to the license. if there is no license, return an empty string 
const renderLicenseLink = license => {
  if (license == 'MIT') {
    return `[${license}](https://opensource.org/licenses/MIT)
    `
  } else if (license === 'ISC') {
    return `[${license}](https://opensource.org/licenses/ISC)
    `
  } else if (license === 'Apache 2.0') {
    return `[${license}](https://opensource.org/Apache-2.0)
    `
  } else if (license === 'BSD 3-Clause') {
    return `[${license}](https://opensource.org/licenses/BSD-3-Clause)
    `
  } else if (license === 'GPL 3.0') {
    return `[${license}](https://www.gnu.org/licenses/gpl-3.0)
    `
  } else {
    return ''
  }
}

// returning licensing section
// if theres no license, return empty string
const renderLicenseSection = license => {
  if (!license) {
    return ''
  }

  return ` This is covered by the ${renderLicenseLink(license)} license.
  `
}

// generating the markdown for readme file
const generateMarkdown = data => {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  #### [${data.title}](${data.link})

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)

  ## Installation
  ${data.install}

  ## Usage 
  ${data.usage}

  ## Contributing

  ${data.contributing}


  ## Tests

  ${data.test}

  ## Questions

  Contact [${data.name}](https://github.com/${data.username}) at [${data.email}](mailto:${data.email}) for any problems 

  $$ License
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;