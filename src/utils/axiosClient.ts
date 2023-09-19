import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { BASE_URL } from "./constants";

// Create a new Axios instance
const axiosClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the JWT token in the headers
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token: string | null = localStorage.getItem("session");
    if (token) {
      const token_ = JSON.parse(token);
      config.headers.Authorization = `Bearer ${token_["access"]}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to check for token expiration and renew it
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      // Token has expired, attempt to renew it
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
