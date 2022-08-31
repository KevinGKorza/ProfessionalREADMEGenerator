// TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
    ## Licensing:
    [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)
  
    ## Table of Contents
    -[Description] (#description)
    -[Installation] (#installation)
    -[Usage] (#usage)
    -[Contribution] (#contribution)
    -[Testing] (#testing)
    -[Additional Information] (#additional Information)
  
    ## Description:
    ${data.description}
  
    ## Installation:
    ${data.installation}
  
    ## Usage:
    ${data.licensing}
  
    ## Contribution:
    ${data.contribution}
  
    ## Testing:
    ${data.testing}
  
    ## Addition Information:
    -Github: [${data.github}](https://github.com/${data.github})
    -Email: ${data.email}
  
  `;
  }
  
  module.exports = generateMarkdown;
  
