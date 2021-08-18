import axios from 'axios'

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/users'
}

let axiosInstance = axios.create(config)

const getaxiosUsers = () => {
    return axiosInstance.get('') // -> 'https://jsonplaceholder.typicode.com/users
}

const getaxiosUser = (id) => {
    return axiosInstance.get('/' + id) // -> 'https://jsonplaceholder.typicode.com/users
}

export{getaxiosUsers, getaxiosUser}