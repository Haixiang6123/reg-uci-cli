const table = require('table').table
const chalk = require('chalk')
const Service = require('../http')

const columns = ["Code", "Type", "Sec", "Units", "Instructor", "Time", "Place", "Final", "Max", "Enr", "WL", "Req", "Nor", "Rstr", "Textbooks", "Web", "Status"]

module.exports = {
    createRequestBody: (options) => {
        let requestBody = {}

        if (options.dept) {
            requestBody.Dept = options.dept
        }
        if (options.coursenum) {
            requestBody.CourseNum = options.coursenum
        }

        return requestBody
    },
    displayCourses: (requestBody) => {
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
    },
}