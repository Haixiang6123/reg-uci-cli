module.exports = {
    createRequestBody: (options) => {
        let requestBody = {}

        if (options.dept) {
            requestBody.Dept = options.dept
        }
        if (options.yearterm) {
            requestBody.YearTerm = options.yearterm
        }

        return requestBody
    }
}