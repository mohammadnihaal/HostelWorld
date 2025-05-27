import axios from "axios";
import { environment } from "./environment";

const apiClient = axios.create({
    baseURL: environment.apiUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token?.trim()?.length) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {

    console.log(error);
    return "";
});

export default apiClient;
