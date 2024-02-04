//  function to render your chosen license 
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![License: MIT](https://img.shields.io/badge/License-${license}-yellowgreen.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License 
Project currently licensed under ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
${renderLicenseBadge(data.license)}
## Contents
* [Description](#description)
* [Usage](#usage)
* [Requirements](#requirements)
* [Contact-Me](#contact-me)
* [Contributors](#contributors)
${renderLicenseLink(data.license)}
## Description
${data.description}
## Usage
${data.usage}
## Requirements
${data.require}
## Contact-Me
* Name - ${data.name}
* Email - ${data.email}
* GitHub - [${data.github}](https://github.com/${data.github}/)
## Contributors
${data.contributors}
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
