/**
 * 公共的类型定义文件
 */
export type Method = 'get' | 'GET' | 'POST' | 'post' | 'PUT' | 'put' | 'DELETE' | 'delete' | 'head' | 'options' | 'OPTIONS' | 'HEAD' | 'PATH' | 'patch';

export interface RequestConfig {
  url: string;
  method?: Method; // 传递的请求类型只能为 上方的type  Method类型
  data?: any;
  params?: any;
}