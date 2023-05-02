import axios from 'axios';
import { BASE_URI } from "./base";
import { Storage } from '../StorageClass/StorageClass';

const storage = new Storage();

export const getNews = async () => {
    try {
        const response = await axios.get(`${BASE_URI}/news`, storage.getConfig());
        return response.data;
    } catch (error) {
        throw Error(error)
    }
 
}

export const createNews = async (data) => {
    try {
        const response = await axios.post(`${BASE_URI}/news`, data, storage.getConfig());
        return response.data;
    } catch (error) {
        throw Error(error)
    }
 
}


export const deleteNews = async (data) => {
    try {
        const response = await axios.delete(`${BASE_URI}/news/${data}`, storage.getConfig());
        return response.data;
    } catch (error) {
        throw Error(error)
    }
 
}

