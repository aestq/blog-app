const inquirer = require('inquirer')
const { questions } = require('./consts')
const createTemplate = require('./templates/create-template')

inquirer.prompt(questions).then((result) => {
  createTemplate(result)
})
