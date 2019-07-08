module.exports = {
    createRequestBody: (options) => {
        let requestBody = {}

        if (options.dept) {
            requestBody.Dept = options.dept
        }
        if (options.yearterm) {
            requestBody.YearTerm = options.yearterm
        }
        if (options.coursenum) {
            requestBody.CourseNum = options.coursenum
        }

        return requestBody
    }
}