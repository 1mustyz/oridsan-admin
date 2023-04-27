import axios from 'axios';
import { BASE_URI } from "./base";
import { Storage } from '../StorageClass/StorageClass';

const storage = new Storage();

export const getSliders = async () => {
    try {
        const response = await axios.get(`${BASE_URI}/sliders`, storage.getConfig());
        return response.data;
    } catch (error) {
        throw Error(error)
    }
 
}

export const createSlider = async (data) => {
    try {
        const response = await axios.post(`${BASE_URI}/sliders`, data, storage.getConfig());
        return response.data;
    } catch (error) {
        throw Error(error)
    }
 
}


export const deleteSlider = async (data) => {
    try {
        const response = await axios.delete(`${BASE_URI}/sliders/${data}`, storage.getConfig());
        return response.data;
    } catch (error) {
        throw Error(error)
    }
 
}

