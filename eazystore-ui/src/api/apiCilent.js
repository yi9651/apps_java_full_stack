import axios from "axios";
//console.log("Base URL:", import.meta.env.VITE_API_BASE_URL);

const baseUrl = import.meta.env.VITE_API_BASE_URL;

if (!baseUrl) {
  console.error("VITE_API_BASE_URL is not defined!");
  console.log("Available env vars:", import.meta.env);
}
const apiCilent = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

export default apiCilent;
