import axios from 'axios';

const baseURL = "http://localhost:3002/";


export const axiosClient = axios.create({
    baseURL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});