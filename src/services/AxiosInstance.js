import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
});

const handleRequest = async (requestMethod, url, data, headers, params) => {
  const result = {
    success: false,
    data: null,
    error: null,
  };

  try {
    const response = await requestMethod(url, data, {
      headers: headers,
      params: params,
    });

    result.success = true;
    result.data = response.data;
  } catch (error) {
    result.error = error;
  }

  return result;
};

export const get = async (url, params, headers) => {
  return handleRequest(axiosInstance.get, url, null, headers, params);
};

export const post = async (url, data, headers) => {
  return handleRequest(axiosInstance.post, url, data, headers, null);
};

export const put = async (url, data, headers) => {
  return handleRequest(axiosInstance.put, url, data, headers, null);
};

export const del = async (url, params, headers) => {
  return handleRequest(axiosInstance.delete, url, null, headers, params);
};

export default axiosInstance;
