import axios from "axios";

// Configure Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:8001/api",  // Laravel API base URL
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

export default axiosInstance;
