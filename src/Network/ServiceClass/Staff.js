import axios from 'axios';
import { BASE_URI } from "./base";
import { Storage } from '../StorageClass/StorageClass';

const storage = new Storage();

export const getStaffs = async () => {
    try {
        const response = await axios.get(`${BASE_URI}/admin/staff`, storage.getConfig());
        return response.data;
    } catch (error) {
        throw Error(error)
    }
 
}

export const createStaff = async (data) => {
    try {
        const response = await axios.post(`${BASE_URI}/admin/staff`, data, storage.getConfig());
        return response.data;
    } catch (error) {
        // throw new Error(error)
        error.isError = true
        return error
    }
 
}


export const deleteStaff = async (data) => {
    try {
        const response = await axios.delete(`${BASE_URI}/admin/staff`, data, storage.getConfig());
        return response.data;
    } catch (error) {
        throw Error(error)
    }
 
}

