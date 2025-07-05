import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "./apiPaths.util";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 80000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors globaly
    if (error.response) {
      if (error.response.status === 400) {
        toast.error(error);
      } else if (error.response.status === 500) {
        toast.error("Server error. Please try again later");
      }
    } else if (error.code === "ECONNABORTED") {
      toast.error("Request timeout");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
