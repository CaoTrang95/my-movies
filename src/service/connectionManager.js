import axios from "axios";
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = "";
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    config.url = encodeURI(config.url || "");
    return config;
  },
  (error) => Promise.reject(error)
);
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      //   clearToken();
    }
    return Promise.reject(error);
  }
);
const makeGet = (url, params = {}) => {
  return axiosInstance.get(url, {
    params: params,
    paramsSerializer: { indexes: null },
  });
};
export { makeGet };
