import axios from "axios";
import { baseUrl } from "../config/config";


export const get = (url, q, successCallback, errorCallback) => {
  axios
    .get(`${baseUrl}${url}`, {
      params: {
        q: q,
      },
    })
    .then((res) => {
      successCallback(res.data);
    })
    .catch((err) => {
      errorCallback(err.response.data);
    });
};
