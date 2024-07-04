import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

export const apiSuccessCode = {
  success: 200,
};

/**
 * Creates an Axios instance with a base URL, timeout, and default headers.
 * The instance is configured to use credentials for cross-origin requests.
 */
export const $axios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
  withCredentials: true,
});

$axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
$axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
