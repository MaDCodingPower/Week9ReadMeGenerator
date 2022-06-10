// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license == "GPL"){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GNU%20GPL-green)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license == "Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-green.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT"){
    return "Licensed by [MIT](https://opensource.org/licenses/MIT)"
  } else if (license == "Apache"){
    return "Licensed by [Apache](https://opensource.org/licenses/Apache-2.0)"
  } else if (license == "GPL"){
    return "Licensed by [GPL](https://www.gnu.org/licenses/gpl-3.0)"
  }
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)} ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}


## Description

>${data.description}


## Table of Contents:

>-[Installation](#installation)
>
>-[Usage](#usage)
>
>-[Licensing](#licensing)
>
>-[Contributors](#contributors)
>
>-[Testing](#testing)
>
>-[Questions](#questions)


## Installation

>${data.installation}

## Usage

>${data.usage}

## Licensing

>${renderLicenseSection(data.license)}

## Contributors

>${data.collaborators}

## Testing

>${data.test}

## Questions

>[Github Profile](https://github.com/${data.github})
>
>Reach me at: ${data.email}
`;
}

module.exports = generateMarkdown;
