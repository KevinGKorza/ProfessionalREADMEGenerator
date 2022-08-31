//The function to generate markdown for the README generation
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
    -[Information] (#information)
    -[Questions] (#questions)
  
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

    ## Questions
    -If you have any other questions regarding this project, please contact me at ${data.email} 
   
  
  `;
  }
  
  module.exports = generateMarkdown;
  
