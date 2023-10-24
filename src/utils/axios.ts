import axios from "axios";
import toast from "react-hot-toast";
import { type ServerError } from "types/dashboard/auth";
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
  if (tokenStr) {
    config.headers.Authorization = `Bearer ${tokenStr}`;
  }
  return config;
});

api.interceptors.response.use(
  function (response) {
    if (loadingToast) {
      toast.dismiss(loadingToast);
    }

    return response;
  },
  function (error: ServerError) {
    if (loadingToast) {
      toast.dismiss(loadingToast);
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    let errorMessage = "";

    if (typeof error.response.data.detail === "string") {
      errorMessage = error.response.data.detail;
    } else {
      errorMessage = error.response.data.detail.reason;
    }

    toast.error(errorMessage);
    return Promise.reject(error);
  },
);

export default api;
