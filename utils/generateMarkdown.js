// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === MIT){
    return `[![Licensed by: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === GPL){
    return `[![Licensed by: GPL](https://img.shields.io/badge/License-GNU%20GPL-green)(https://www.gnu.org/licenses/gpl-3.0)]`;
  } else if (license == Apache){
    return `[![Licensed by: Apache](https://img.shields.io/badge/License-Apache_2.0-green.svg)(https://opensource.org/licenses/Apache-2.0)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#> ${data.title}


`;
}

module.exports = generateMarkdown;
