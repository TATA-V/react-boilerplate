import axios from 'axios';

const BASE_URL = import.meta.env.DEV ? '/api' : import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
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