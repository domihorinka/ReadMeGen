// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "none"){
    return ""
  }else{
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "none"){
    return ""
  }else{
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

## Table of Contents 
* [Installation](#installation)
* [Description](#description)
* [Licenses](#license)
* [Usage](#usage)
* [Contributors](#contributors)


## Installation
${data.installation}

## Description
${data.description}

## License
${data.license}

## Usage
${data.usage}

## Contributors
${data.contributors}
`;
}

module.exports = generateMarkdown;
