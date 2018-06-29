import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(
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

axios.interceptors.response.use(
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

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
