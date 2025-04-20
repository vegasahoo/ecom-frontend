import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/ecom-backend";

const axiosInstance = axios.create({
  baseURL: REST_API_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
