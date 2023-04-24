import axios from 'axios';
import { BASE_URI } from "./base";
import { Storage } from '../StorageClass/StorageClass';

const storage = new Storage();

export const getAllMembers = async () => {
    try {
        const response = await axios.get(`${BASE_URI}/admin/all`, storage.getConfig());
        return response.data;
    } catch (error) {
        throw Error(error)
    }
 
}

export const approveApplication = async (data) => {
    try {
        const response = await axios.post(`${BASE_URI}/users/approval`, data, storage.getConfig());
        return response.data;
    } catch (error) {
        throw Error(error)
    }
 
}

