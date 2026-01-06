import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    // const res = error?.response;
    
    return Promise.reject(error);
  },
);

export default instance;