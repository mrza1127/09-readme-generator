// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require('fs');
const renderLicenseBadge = license => {
  if (!license) {
    return ''
  }

  return `
  ${license} Badge Placeholder` 
}

// table of contents here
generateTOC = () => {
  return `
  Table of Contents will go here
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if (!license) {
    return ''
  }

  return `
  [${license}](https://www.google.com)
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (!license) {
    return ''
  }

  return `
  This is covered by the ${renderLicenseLink(license)} license.
  `
}

// Questions:
// name
// title
// email
// github repo link
// github username 
// description

// usage
// test
// instructions for installation
// contributors
// license


// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  ${generateTOC()}

  ## Installation
  ${data.install}

  ## Usage 
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  Contributions were made by ${data.username} and ${data.contributors}

  ## Tests

  ${data.test}

  ## Contact
  
  If you have any further questions, contact ${data.name} at ${data.email}

`;
}

module.exports = generateMarkdown;
