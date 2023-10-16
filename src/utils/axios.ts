import axios from "axios";
import toast from "react-hot-toast";
import { baseURL } from "./config";

const api = axios.create({
  baseURL: baseURL,
});

let loadingToast = "";

api.interceptors.request.use(function (config) {
  if (config.method !== "get") {
    loadingToast = toast.loading("Loading...");
  }
  const tokenStr = localStorage.getItem("authToken")
    ? localStorage.getItem("authToken")
    : null;
  config.headers.Authorization = `Bearer ${tokenStr}`;
  return config;
});

api.interceptors.response.use(
  function (response) {
    if (loadingToast) {
      toast.dismiss(loadingToast);
    }

    return response;
  },
  function (error) {
    if (loadingToast) {
      toast.dismiss(loadingToast);
    }
    // if (showNotFoundError) {
    //   toast.error(error.response.data.error);
    // }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default api;
