import axios from 'axios';
import { BASE_URI } from "./base";
import { Storage } from '../StorageClass/StorageClass';

const storage = new Storage();

export const getConferences = async () => {
    try {
        const response = await axios.get(`${BASE_URI}/events`, storage.getConfig());
        return response.data;
    } catch (error) {
        throw Error(error)
    }
 
}

export const createConference = async (data) => {
    try {
        const response = await axios.post(`${BASE_URI}/events`, data, storage.getConfig());
        return response.data;
    } catch (error) {
        throw Error(error)
    }
 
}

