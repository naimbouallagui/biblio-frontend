import axios from "axios";

const api = axios.create({
//   timeout: 20000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use(
  config => {
    const { token } = localStorage;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => response,
  error => error
);

export default api;
