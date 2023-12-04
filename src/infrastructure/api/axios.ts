import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1", // Your API base URL
  withCredentials: true,
});

export default axiosInstance;
