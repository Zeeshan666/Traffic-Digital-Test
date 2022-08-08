import axios from "axios";
const request = function (options) {
  const onSuccess = function (response) {
    return response.data;
  };

  const onError = function (err) {
    if (err) {
      if (
        err.response.status === 401 ||
        err.response.status === 431 ||
        err.response.status == 500
      ) {
        console.error("Data:", err);
      }
      //Request was made but server responded with something other than 2xx
      console.error("Status:", err.response.status);
      console.error("Data:", err.response.data);
      console.error("Headers:", err.response.headers);
    } else {
      // Something else happened while setting up the request triggered the error
      console.error("Error Message:", err.response.data);
    }

    //return Promise.reject(err.response || err.message);
    return Promise.reject(err.response.data);
  };
  const client = axios.create();
  return client(options).then(onSuccess).catch(onError);
};

export default request;
