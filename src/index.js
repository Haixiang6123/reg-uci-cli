#!/usr/bin/env node
const commandLineArgs = require('command-line-args')
const inquirer = require('inquirer')
const utils = require('./utils')
const Service = require('./http')

const optionDefinitions = [
    { name: 'dept', alias: 'd', type: String },
    { name: 'coursenum', alias: 'c', type: String },
]

// Get command arguments
const options = commandLineArgs(optionDefinitions)

// Create request body
const requestBody = utils.createRequestBody(options)

Service.getOptions()
    .then(options => {
        const { YearTerm } = options
        const choices = YearTerm.map(term => ({
            name: term.text,
            value: term.value,
        }))
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'yearTerm',
                    message: 'Choose year term:',
                    choices
                },
            ])
            .then(answers => {
                // Get year term
                requestBody.YearTerm = answers.yearTerm

                // Display courses
                utils.displayCourses(requestBody)
            });
    })
