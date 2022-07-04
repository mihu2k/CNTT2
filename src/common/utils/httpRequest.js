import axios from 'axios';

const httpRequest = axios.create({
  baseURL:
    process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_API_ENDPOINT,
});

httpRequest.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile'))?.accessToken
    }`;
  }
  return req;
});

export const get = async (path, options = {}) => {
  const response = await httpRequest.get(path, options);
  return response.data;
};

export default httpRequest;
