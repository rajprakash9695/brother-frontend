import axios from 'axios';
import { BACKEND_API } from '../config';
import { ELocalStorageKeys } from '../common/enums';
import toast from 'react-hot-toast';

const axiosInstance = axios.create({
  baseURL: BACKEND_API,
});

if (localStorage.getItem(ELocalStorageKeys.ACCESS_TOKEN)) {
  const accessToken = localStorage.getItem(ELocalStorageKeys.ACCESS_TOKEN);
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

axiosInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      toast.error('Something went wrong! please contact admin@gmail.com');
    }
    return Promise.reject(error.response);
  }
);

export default axiosInstance;
