import { RequestConfig } from "./types";

/**
 * 这个文件实现所有的请求逻辑
 */
export default function xhr (config: RequestConfig) {
  const {data = null, url, method = 'GET'} = config;
  const request = new XMLHttpRequest();

  // 同步还是异步， 默认异步 true
  request.open(method.toUpperCase(), url, true);
  request.send(data);

}


