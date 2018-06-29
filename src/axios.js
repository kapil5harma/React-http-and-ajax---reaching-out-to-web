import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN_FROM_INSTANCE';

instance.interceptors.request.use(
  request => {
    console.log('request: ', request);
    // Edit request config here, (like adding global headers, etc)
    return request;
  },
  error => {
    console.log('error: ', error);
    // Do something if your config fails (like there's no internet connection)
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    console.log('response: ', response);
    // Edit response config here, (like adding global headers, etc)
    return response;
  },
  error => {
    console.log('error: ', error);
    // Do something if your config fails (like there's no internet connection)
    return Promise.reject(error);
  }
);

export default instance;
