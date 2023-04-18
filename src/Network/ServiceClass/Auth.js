import axios from "axios"
import { BASE_URI } from "./base";

const config = {
    headers:{
        "content-type":"application/json"
    }
};

export const createAccount = async (data) => {
    try {
  
      const response = await axios.post(`${BASE_URI}/registration/register-company`, data, config);
      return response.data;
      
    } catch (error) {
      throw Error(error)
    }
}

export const login = async (data) => {
  
    const response = await axios.post(`${BASE_URI}/auth/login`, data, config);
    return response.data;
  
}  


