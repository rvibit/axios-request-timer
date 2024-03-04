import {AxiosResponse, InternalAxiosRequestConfig} from 'axios';

let reqMap: Record<
  string,
  {startTime: number; endTime: number; timeSpent: number}
> = {};

function httpTimer() {
  const requestTimer = (config: InternalAxiosRequestConfig) => {
    let url = config?.url as string;
    if (reqMap.hasOwnProperty(url)) {
      reqMap[url].startTime = new Date().getTime();
    } else {
      reqMap[url] = {startTime: 0, endTime: 0, timeSpent: 0};
      reqMap[url].startTime = new Date().getTime();
    }
    return config;
  };

  const responseTimer = (res: AxiosResponse) => {
    let url = res.config?.url as string;
    reqMap[url].endTime = new Date().getTime();

    reqMap[url].timeSpent =
      (reqMap[url].endTime - reqMap[url].startTime) / 1000;
    console.warn(JSON.stringify(reqMap, null, 2));
    return res;
  };
  return {requestTimer, responseTimer, reqMap};
}
export {httpTimer};



// Usage
// const http = axios.create({
//     baseURL: '',
//     headers: {},
//   });
// http.interceptors.request.use(httpTimer().requestTimer);
// http.interceptors.response.use(httpTimer().responseTimer);
