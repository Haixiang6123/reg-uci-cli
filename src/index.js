const table = require('table').table
const chalk = require('chalk')
const commandLineArgs = require('command-line-args')
const Service = require('./http')
const utils = require('./utils')

const columns = ["Code", "Type", "Sec", "Units", "Instructor", "Time", "Place", "Final", "Max", "Enr", "WL", "Req", "Nor", "Rstr", "Textbooks", "Web", "Status"]

const optionDefinitions = [
    { name: 'dept', type: String },
    { name: 'yearterm', type: String}
]

// Get command arguments
const options = commandLineArgs(optionDefinitions)

// Create request body
const requestBody = utils.createRequestBody(options)

// Get course info
Service.getCourses(requestBody)
    .then(courses => {
        courses.forEach(course => {
            // Title
            console.log(chalk.blue(course.title))

            // Comments
            if (course.comments) {
                console.log(chalk.yellow(course.comments))
            }

            // Sub courses table
            let subCourseRows = [ columns ]
            course.subCourses.forEach(subCourse => {
                subCourseRows.push(Object.values(subCourse))
            })
            const subCourseTable = table(subCourseRows);
            console.log(subCourseTable)
        })
    })
