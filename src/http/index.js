const axios = require('axios')

const axiosInstance = axios.create({
    baseURL: 'https://uci-reg-api.herokuapp.com'
})

const getOptions = () => {
    return axiosInstance.get('/options').then(response => {
        return response.data
    })
}

const getCourses = (params) => {
    return axiosInstance.get('/courses', {params})
        .then(response => {
            return response.data
        })
}

module.exports = {
    getOptions,
    getCourses
}


