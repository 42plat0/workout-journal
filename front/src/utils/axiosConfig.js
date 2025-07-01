import axios from "axios";

import { url } from "./constants";

export const myAxios = axios.create({
    baseURL: url,
    withCredentials: true
})

// Request interceptor
myAxios.interceptors.request.use((config) => {
    return config;
}, (err) => {
    return Promise.reject(err);
})

// Response interceptor
myAxios.interceptors.response.use((config) => {
    return config.data;
}, (err) => {
    if (err.response){
        const data = err.response.data;
        Promise.reject(data.message);
        return {error: data.message};
    }
    return Promise.reject(err);
})
