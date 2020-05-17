import axios from "axios";

export function request(config) {
  //   1.创建axios实例
  const instance = axios.create({
    baseURL: "http://106.54.46.139:5000",
    timeout: 30000
  });

  //   2.axios拦截器
  instance.interceptors.request.use(req => {
    return req;
  });
  instance.interceptors.response.use(res => {
    return res.data;
  });

  //   3.发送请求
  return instance(config).then();
}
