import apiClient from "./ApiClient";


export class BaseService {
    static async get(url: string, params: object = {}) {
        try {
            const response = await apiClient.get(url, { params });
            return response.data;
        }
        catch (err: any) {
            console.error(err.message)
            throw err;
        }
    }
    static async post(url: string, data: object = {}) {
        try {
            const response = await apiClient.post(url, data);
            return response.data;
        }
        catch (err: any) {
            console.error(err.message)
            throw err;
        }
    }
    static async put(url: string, data: object = {}) {
        try {
            const response = await apiClient.put(url, data);
            return response.data;
        }
        catch (err: any) {
            console.error(err.message);
            throw err;
        }
    }
    static async delete(url: string, data: object = {}) {
        try {
            const response = await apiClient.delete(url, { data });
            return response.data;
        }
        catch (err: any) {
            console.error(err.message);
            throw err;
        }
    }
}