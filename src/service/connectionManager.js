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
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGU3NWQzMjVhNTRkN2IwYzA1YzY3YjE2NmQ0N2I2YyIsInN1YiI6IjY2MTQxMTQwMGJiMDc2MDE4NTMxMGJkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-V3Igf8touvg-mXJVbvd5cv_OYb1RhZZ4FAfyk1BEZw";
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
