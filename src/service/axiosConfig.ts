import axios from "axios";

export const baseURL = import.meta.env.VITE_APP_BACKEND_API;

const httpInitiateClient = axios.create({
  baseURL,
});

httpInitiateClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { httpInitiateClient };
