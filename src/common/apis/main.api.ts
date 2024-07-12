// import { AxiosResponse } from 'axios';
// import axiosIntance from '../../utils/axios';
// import { IAPIResponse, IGetAPI } from '../interface';
// import toast from 'react-hot-toast';

export function get() {}
// const EmptyBadRequest = {
//     errors: 'Bad Request',
//     message: 'Oops something went wrong',
//     status: 400,
//   };

// //Get API
// export async function getApi({
//   url,
//   showToast = false,
//   message,
//   params,
// }: IGetAPI):  Promise <IAPIResponse> {
//   try {
//     const request = await axiosIntance.get(url, { params: params });
//     const response = await
//   } catch (error) {}
// }

// //handle Api data response
// const handleAPIResponse = async(
//     request : AxiosResponse,
//     showToast: boolean ,
//     message: string | undefined
// ): Promise<IAPIResponse> => {
//     try {
//         const result = await request;

//         if(!result && showToast){
//             toast.error(message || EmptyBadRequest.message)
//         }
//     } catch (error) {

//     }
// }
