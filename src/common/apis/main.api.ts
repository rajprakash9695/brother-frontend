import { AxiosResponse } from 'axios';
import axiosInstance from '../../utils/axios';
import {
  IAPIResponse,
  IDeleteAPI,
  IGetAPI,
  IPatchAPI,
  IPostAPI,
} from '../interface';
import toast from 'react-hot-toast';

const EmptyBadRequest = {
  errors: 'Bad Request',
  message: 'Oops something went wrong',
  status: 400,
};

//Get API
export async function getApi({
  url,
  showToast = false,
  message,
  params,
}: IGetAPI): Promise<IAPIResponse> {
  try {
    const request = await axiosInstance.get(url, { params: params });

    const response = await handleAPIReturn(request, showToast, message);
    return response;
  } catch (error: any) {
    return await handleAPIReturn(error, showToast, message);
  }
}

//Post Api
export async function postApi({
  url,
  values,
  showToast = false,
  message,
  params,
}: IPostAPI): Promise<IAPIResponse> {
  try {
    const request = await axiosInstance.post(url, values, { params });

    const response = await handleAPIReturn(request, showToast, message);
    return response;
  } catch (error: any) {
    return await handleAPIReturn(error, showToast, message);
  }
}

//Delete Api
export async function deleteApi({
  url,
  values,
  showToast = false,
  message,
}: IDeleteAPI): Promise<IAPIResponse> {
  try {
    const request = await axiosInstance.delete(url, values);

    const response = await handleAPIReturn(request, showToast, message);
    return response;
  } catch (error: any) {
    return await handleAPIReturn(error, showToast, message);
  }
}

//update api
export async function patchApi({
  url,
  values,
  showToast = false,
  message,
}: IPatchAPI): Promise<IAPIResponse> {
  try {
    const request = await axiosInstance.patch(url, values);

    const response = await handleAPIReturn(request, showToast, message);
    return response;
  } catch (error: any) {
    return await handleAPIReturn(error, showToast, message);
  }
}

//putApi
export async function putApi({
  url,
  values,
  showToast = false,
  message,
}: IPatchAPI): Promise<IAPIResponse> {
  try {
    const request = await axiosInstance.put(url, values);

    const response = await handleAPIReturn(request, showToast, message);
    return response;
  } catch (error: any) {
    return await handleAPIReturn(error, showToast, message);
  }
}

//handle Api data response
const handleAPIReturn = async (
  request: AxiosResponse,
  showToast: boolean,
  message: string | undefined
): Promise<IAPIResponse> => {
  try {
    const result = await request;

    if (!result && showToast) {
      toast.error(message || EmptyBadRequest.message);
      return result || EmptyBadRequest;
    }

    if (result.status >= 400) {
      //@ts-ignore
      return toast.error(result?.message);
    }

    const { data } = result;
    if (showToast) {
      if (data?.error || data?.status >= 400)
        toast.error(
          message || data?.message ? data?.message : EmptyBadRequest.message
        );
      else
        toast.success(
          message ? message : data?.message ? data?.message : 'Success'
        );
    }
    return data;
  } catch (error: any) {
    console.log(error);
    const { data } = error.response;
    if (showToast) {
      toast.error(
        message || data?.message ? data?.message : EmptyBadRequest.message
      );
    }
    return data || EmptyBadRequest;
  }
};
