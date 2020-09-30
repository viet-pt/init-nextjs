import { BACKEND_API } from "./_config";
import { postRequest } from "./_http";

const baseURL = BACKEND_API;

export const UserService = {
  sendOtp: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/send_otp`;
    return postRequest(URL, data, {}, successCallback, failCallback);
  },

  apiReport: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/api_report`;
    return postRequest(URL, data, {}, successCallback, failCallback);
  },

}
