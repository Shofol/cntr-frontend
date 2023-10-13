import axios from "axios";
import { baseURL } from "./config";

const api = axios.create({
  baseURL: baseURL,
});

export default api;
