// apiClient.js
import axios from "axios";

declare global {
  interface Window {
    RUNTIME_CONFIG: {
      API_URL: string;
    };
  }
}

const url = window.RUNTIME_CONFIG?.API_URL || import.meta.env.VITE_API_URL;

console.log(url);

console.log(window.RUNTIME_CONFIG?.API_URL);
const apiClient = axios.create({
  baseURL: url,
  timeout: 10000, // 10 sec timeout
});

// Add a response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      alert("Server error:" + error.response.status);
    } else if (error.request) {
      alert("Network error: No response from server");
    } else {
      alert("Unexpected error:" + error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
