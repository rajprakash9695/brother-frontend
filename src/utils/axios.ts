import axios from 'axios';
import { BACKEND_API } from '../config';

const axiosIntance = axios.create({
  baseURL: BACKEND_API,
});

axiosIntance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
);

export default axiosIntance;
