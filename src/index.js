const table = require('table').table
const chalk = require('chalk')
const commandLineArgs = require('command-line-args')
const Service = require('./http')
const utils = require('./utils')

const columns = ["Code", "Type", "Sec", "Units", "Instructor", "Time", "Place", "Final", "Max", "Enr", "WL", "Req", "Nor", "Rstr", "Textbooks", "Web", "Status"]

const optionDefinitions = [
    { name: 'dept', alias: 'd', type: String },
    { name: 'coursenum', alias: 'c', type: String },
    { name: 'yearterm', alias: 't', type: String}
]

// Get command arguments
const options = commandLineArgs(optionDefinitions)

// Create request body
const requestBody = utils.createRequestBody(options)

// Get course info
Service.getCourses(requestBody)
    .then(courses => {
        courses.forEach(course => {
            // Delimiter
            console.log(chalk.red('#################################'))

            // Title
            console.log(chalk.blue('Course title: ' + course.title))

            // Comments
            if (course.comments) {
                console.log(chalk.yellow('Comments: ' + course.comments))
            }

            // Sub courses table
            let subCourseRows = [ columns ]
            course.subCourses.forEach(subCourse => {
                subCourseRows.push(Object.values(subCourse))
            })
            const subCourseTable = table(subCourseRows);
            console.log(subCourseTable)

            // Delimiter
            console.log(chalk.red('#################################'))
        })
    })
