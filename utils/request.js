import CaRequest from '../common/caRequest';
import {
  getStorageSync
} from '../common/storage';

const caRequest = new CaRequest();

// 请求拦截器
caRequest.interceptors.request((request) => {
  const token = getStorageSync('access_token');
  if (token) {
    request.header = {
      ...request.header,
      // token,
    }
  }
  return request
});

// 响应拦截器
caRequest.interceptors.response((response) => {
  return response.data;
});

// 设置默认配置
caRequest.setConfig((config) => {
	config.baseURL = 'http://39.98.215.185:8010' 
  return config
});

export default caRequest;
