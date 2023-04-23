import axios from 'axios';
import { BASE_URI } from "./base";
import { Storage } from '../StorageClass/StorageClass';

const storage = new Storage();


export const uploadFile = async (data) => {

    const response = await axios.post(`${BASE_URI}/file`, data, storage.getFileConfig());
    return response.data;
 
}

