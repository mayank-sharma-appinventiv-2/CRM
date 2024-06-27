import axios from "axios";

export const apiSuccessCode = {
  success: 200,
};

/**
 * Creates an Axios instance with a base URL, timeout, and default headers.
 * The instance is configured to use credentials for cross-origin requests.
 */
export const $axios = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
  withCredentials: true
});

$axios.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
$axios.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);