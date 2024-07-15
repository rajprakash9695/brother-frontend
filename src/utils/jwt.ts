import { jwtDecode } from 'jwt-decode';
import axiosIntance from './axios';
import axiosInstance from './axiosInstance';

const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode<{ exp: number }>(accessToken);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const handleTokenExpired = (exp: number) => {
  let expiredTimer;

  const currentTime = Date.now();

  const timeLeft = exp * 1000 - currentTime;

  clearTimeout(expiredTimer);

  expiredTimer = setTimeout(() => {
    alert('Login Session expired');

    localStorage.removeItem('accessToken');

    window.location.href = '/login';
  }, timeLeft);
};

const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    // This function below will handle when token is expired
    const { exp } = jwtDecode<{ exp: number }>(accessToken);
    handleTokenExpired(exp);
  } else {
    localStorage.removeItem('accessToken');
    delete axiosInstance.defaults.headers.common.Authorization;
  }
};

// const generateAuthUser = (user: any) => {
//   const permissions = groupBy(
//     user.permissions.filter((item: any) => item),
//     ({ head }: any) => head
//   );

//   const allowedRoutes = Object.keys(permissions);

//   const allowedResources = user.permissions.map((item: any) => {
//     if (item?.actions?.length > 0) {
//       return item.resource;
//     }
//   });

//   return {
//     displayName: user?.name || '',
//     email: user?.email || '',
//     photoURL: user?.image || '',
//     phoneNumber: user?.mobile || '',
//     country: user?.country || '',
//     address: user?.address || '',
//     state: user?.state || '',
//     city: user?.city || '',
//     zipCode: user?.zipCode || '',
//     about: user?.about || '',
//     allowedRoutes,
//     allowedResources,
//     ...user,
//   };
// };
