import { BACKEND_API } from "./_config";
import { postRequest } from "./_http";

const baseURL = BACKEND_API;

export const UserService = {
  login: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/authen_msisdn`;
    return postRequest(URL, data, {}, successCallback, failCallback);
  },

  logout: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/authen_logout`;
    return postRequest(URL, data, {}, successCallback, failCallback);
  },

  register: function (data, successCallback, failCallback) {
    const URL = `${baseURL}/authen_register`;
    return postRequest(URL, data, {}, successCallback, failCallback);
  },
  
}
