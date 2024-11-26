import axios from 'axios';
import https from 'https';

const dotNetAxiosInstance = axios.create({
  //
  baseURL: process.env.NEXT_PUBLIC_DOT_NET_URL,
  httpsAgent: new https.Agent({ rejectUnauthorized: false }), // Allow self-signed certificates
  headers: {
    'Content-Type': 'application/json',
  },
});

dotNetAxiosInstance.interceptors.response.use(
  (response) => {
    // Log or process response data
    return response;
  },
  (error) => {
    // Handle response errors
    console.error('Response Error:', error);
    return Promise.reject(error);
  },
);

export default dotNetAxiosInstance;
