import axios from "axios";

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});
