import axios from 'axios';
import { destroyUserToken, getUserToken } from '../utils/sessionStorage';
import { environment } from '../constants/env';

const axiosInstance = axios.create({
  baseURL: environment.API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = getUserToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,

  (error) => {
    const errorMessage =
      error.response?.data?.message || error.message || 'Unexpected error';

    if (error.response?.status === 401) {
      destroyUserToken();
      window.location.href = '/login';
    }

    return Promise.reject(new Error(errorMessage));
  }
);

export default axiosInstance;
