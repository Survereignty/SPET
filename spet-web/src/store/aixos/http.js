import axios from 'axios'

export const HTTP = axios.create({
    baseURL: "http://10.0.214.253:3000/"
})