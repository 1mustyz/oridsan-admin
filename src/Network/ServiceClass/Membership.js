import axios from 'axios';
import { BASE_URI } from "./base";
import { Storage } from '../StorageClass/StorageClass';

const storage = new Storage();

export const getMemberships = async () => {
    try {
        const response = await axios.get(`${BASE_URI}/membership-category`, storage.getConfig());
        return response.data;
    } catch (error) {
        throw Error(error)
    }
 
}

export const createMembership = async (data) => {
    try {
        const response = await axios.post(`${BASE_URI}/membership-category`, data, storage.getConfig());
        return response.data;
    } catch (error) {
        throw Error(error)
    }
 
}

