import axios from "axios";
import { adminApi } from "../constants/api";

const adminAxiosInstance = axios.create({
    baseURL : adminApi,
    headers: {
        'Content-Type' : 'application/json',
    }
})

export {adminAxiosInstance}