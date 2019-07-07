const axios = require('axios')

const axiosInstance = axios.create({
    baseURL: 'https://uci-reg-api.herokuapp.com'
})

const getOptions = () => {
    return axiosInstance.get('/options').then(response => {
        console.log(response.data)
    })
}

const getCourses = (params) => {
    axiosInstance.get('/courses', {params})
        .then(response => {
            console.log(response.data)
        })
}

module.exports = {
    getOptions,
    getCourses
}


