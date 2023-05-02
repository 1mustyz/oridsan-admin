import axios from 'axios';
import { BASE_URI } from "./base";
import { Storage } from '../StorageClass/StorageClass';

const storage = new Storage();

export const getPresident = async () => {
    try {
        const response = await axios.get(`${BASE_URI}/presidents`, storage.getConfig());
        return response.data;
    } catch (error) {
        throw Error(error)
    }
 
}

export const createPresident = async (data) => {
    try {
        const response = await axios.post(`${BASE_URI}/presidents`, data, storage.getConfig());
        return response.data;
    } catch (error) {
        throw Error(error)
    }
 
}


export const deletePresident = async (data) => {
    try {
        const response = await axios.delete(`${BASE_URI}/presidents/${data}`, storage.getConfig());
        return response.data;
    } catch (error) {
        throw Error(error)
    }
 
}

export const makeCurrentPresident = async (data) => {
    try {
        const response = await axios.put(`${BASE_URI}/presidents/${data}`, storage.getConfig());
        return response.data;
    } catch (error) {
        throw Error(error)
    }
 
}

